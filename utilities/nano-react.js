(function(global) {
  let components = new Map();
  let currentComponent = null;

  class Component {
    constructor(id) {
      this.id = id;
      this.hooks = [];
      this.hookIndex = 0;
      this.updateCallback = null;
    }

    useState(initialValue) {
      const hookIndex = this.hookIndex;
      
      // Initialize hook if it doesn't exist
      if (this.hooks[hookIndex] === undefined) {
        this.hooks[hookIndex] = initialValue;
      }

      const setState = (newValue) => {
        const value = typeof newValue === 'function' 
          ? newValue(this.hooks[hookIndex])
          : newValue;
        
        if (this.hooks[hookIndex] !== value) {
          this.hooks[hookIndex] = value;
          this.triggerUpdate();
        }
      };

      const state = this.hooks[hookIndex];
      this.hookIndex++;
      
      return [state, setState];
    }

    triggerUpdate() {
      this.hookIndex = 0;
      if (this.updateCallback) {
        currentComponent = this;
        this.updateCallback();
        currentComponent = null;
      }
    }

    onUpdate(callback) {
      this.updateCallback = callback;
      this.triggerUpdate();
    }
  }

  // Global useState function
  function useState(initialValue) {
    if (!currentComponent) {
      throw new Error('useState must be called inside a component');
    }
    return currentComponent.useState(initialValue);
  }

  // Initialize a component with a unique ID
  function initNanoReactComponent(componentId, updateFn) {
    let component = components.get(componentId);
    
    if (!component) {
      component = new Component(componentId);
      components.set(componentId, component);
    }
    
    component.onUpdate(updateFn);
    return component;
  }

  function getNanoReactComponent(componentId) {
    return components.get(componentId);
  }

  function resetNanoReactComponents() {
    components.clear();
  }

  // Export to global scope
  global.MiniReact = {
    useState,
    initNanoReactComponent,
    getNanoReactComponent,
    resetNanoReactComponents
  };

})(window);