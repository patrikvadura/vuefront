var script = {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  }
};

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"latestProducts"},"name":{"kind":"Name","value":"productsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"IntValue","value":"4"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"date_added","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"StringValue","value":"DESC","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"special"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"imageLazy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rating"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keyword"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":319}};
    doc.loc.source = {"body":"{\r\n    latestProducts: productsList(page: 1, size: 4, sort: \"date_added\", order: \"DESC\") {\r\n        content {\r\n            id\r\n            name\r\n            shortDescription\r\n            price\r\n            special\r\n            image\r\n            imageLazy\r\n            rating\r\n            keyword\r\n        }\r\n    }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  var options = typeof script === 'function' ? script.options : script;
  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true;
    if (isFunctionalTemplate) {
      options.functional = true;
    }
  }
  if (scopeId) {
    options._scopeId = scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function hook(context) {
      context = context ||
      this.$vnode && this.$vnode.ssrContext ||
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      if (style) {
        style.call(this, createInjectorSSR(context));
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options.functional) {
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script;
}
var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("vf-apollo", {
    attrs: { query: doc },
    scopedSlots: _vm._u([
      {
        key: "loader",
        fn: function() {
          return [
            _c("vf-loader-product-module", { attrs: { column: _vm.column } })
          ]
        },
        proxy: true
      },
      {
        key: "default",
        fn: function(ref) {
          var data = ref.data;
          return [
            _c(
              "vf-product-module",
              {
                attrs: {
                  items: data.latestProducts.content,
                  column: _vm.column
                }
              },
              [_vm._v(_vm._s(_vm.$t("modules.store.latestProduct.textTitle")))]
            )
          ]
        }
      }
    ])
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var latestProduct = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default latestProduct;