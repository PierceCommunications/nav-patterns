/* ==========================================================================
   Off canvas navigation
   ========================================================================== */

(function(win, doc, undefined) {
	'use strict';

	if('classList' in doc.createElement('a') && 'querySelector' in doc) {
		// Build the close button
		var nav_closer = doc.createElement('button'),
			nav = doc.querySelector('.js-nav');

		nav_closer.className = 'nav-close icon-close js-nav-toggle';
		nav_closer.setAttribute('type', 'button');

		var nav_closer_inner = doc.createElement('span');

		nav_closer_inner.classList.add('nav-close__text');
		nav_closer_inner.textContent = 'Close menu';

		nav_closer.appendChild(nav_closer_inner);
		nav.appendChild(nav_closer);

		// Build the interaction
		var nav_togglers = doc.querySelectorAll('.js-nav-toggle'),
			off_canvas_body = doc.querySelector('.js-oc-body'),
			i = 0,
			nav_togglers_length = nav_togglers.length,

			toggle_nav = function(e) {
				// If the nav is already visible remove the active class immediately
				// so the z-index is reduced and the body slides over it
				if(off_canvas_body.classList.contains('is-open')) {
					nav.classList.remove('is-active');
				}

				off_canvas_body.classList.toggle('is-open');

				e.stopPropagation();
				e.preventDefault();
			},

			activate_nav = function() {
				// Browsers
				// Need to work off win.getComputedStyle(off_canvas_body).getPropertyValue('transform')
				var style = win.getComputedStyle(off_canvas_body, null);

				var transform = style.getPropertyValue('-webkit-transform')
								|| style.getPropertyValue('transform');

				// If the nav has just opened add the active class so that
				// the nav has a higher z-index and can actually be used
				if(transform !== 'none') {
					nav.classList.add('is-active');
				}
			},

			close_nav = function(e) {
				// Only do this if the nav is already visible
				if(this.classList.contains('is-open')) {
					this.classList.remove('is-open');
					nav.classList.remove('is-active');

					e.preventDefault();

				} else {
					return;
				}
			};

		// Event listeners
		for(i; i < nav_togglers_length; i++) {
			nav_togglers[i].addEventListener('click', toggle_nav, false);
		}
		off_canvas_body.addEventListener('click', close_nav, false);

		// transitionend polyfill https://github.com/EvandroLG/transitionEnd
		!function(t){"use strict";var i=function(t,i){this.element=t,this.type=i};i.prototype={add:function(t){this.callback=t,this.element.addEventListener(this.type,this.callback,!1)},remove:function(){this.element.removeEventListener(this.type,this.callback,!1)}};var n=function(t){this.element=t,this.transitionEnd=this.whichTransitionEnd(),this.event=new i(this.element,this.transitionEnd)};n.prototype={whichTransitionEnd:function(){var t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==this.element.style[i])return t[i]},bind:function(t){this.event.add(t)},unbind:function(){this.event.remove()}};var e={list:[],getPosition:function(t){if(Array.prototype.indexOf)return this.list.indexOf(t);for(var i=0,n=this.list.length;n>i;i++)if(this.list[i]===t)return i;return-1},insert:function(t){var i=this.getPosition(t),e=-1!==i;return e||(this.list.push(t),this.list.push(new n(t)),i=this.getPosition(t)),this.list[i+1]}};t.transitionEnd=function(t){if(!t)throw"You need to pass an element as parameter!";var i=t[0]||t,n=e.insert(i);return n}}(window);

		var transition = transitionEnd(off_canvas_body).whichTransitionEnd();
		off_canvas_body.addEventListener(transition, activate_nav, false);
	}
}(this, this.document));
