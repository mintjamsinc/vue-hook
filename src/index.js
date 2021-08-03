import Vue from 'vue';

const version = '1.0.0';

const compatible = (/^2\./).test(Vue.version);
if (!compatible) {
	Vue.util.warn('VueHook ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

const VueHook = {
	install(Vue/* , options */) {
		Vue.directive('hook', {
			bind(el, binding, vnode) {
				try {
					let hook = binding.value.bind;
					if (typeof hook === 'function') {
						hook(el, binding, vnode);
					}
				} catch (ex) {/* ignore */}
			},
			inserted(el, binding, vnode) {
				try {
					let hook = binding.value.inserted;
					if (typeof hook === 'function') {
						hook(el, binding, vnode);
					}
				} catch (ex) {/* ignore */}
			},
			updated(el, binding, vnode, oldVnode) {
				try {
					let hook = binding.value.updated;
					if (typeof hook === 'function') {
						hook(el, binding, vnode, oldVnode);
					}
				} catch (ex) {/* ignore */}
			},
			componentUpdated(el, binding, vnode, oldVnode) {
				try {
					let hook = binding.value.componentUpdated;
					if (typeof hook === 'function') {
						hook(el, binding, vnode, oldVnode);
					}
				} catch (ex) {/* ignore */}
			},
			unbind(el, binding, vnode) {
				try {
					let hook = binding.value.unbind;
					if (typeof hook === 'function') {
						hook(el, binding, vnode);
					}
				} catch (ex) {/* ignore */}
			},
		});
	},
};

export default VueHook;