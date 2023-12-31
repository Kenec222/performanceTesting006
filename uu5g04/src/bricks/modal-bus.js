//@@viewOn:revision
// coded:
//   Petr Bišof, 16.10.2020
//   Filip Janovský, 20.10.2020
// reviewed: Filip Janovský, 19.10.2020
//@@viewOn:revision

//@@viewOn:imports
import { Utils } from "uu5g05";
import UU5 from "uu5g04";
import ns from "./bricks-ns.js";
import OptionalLibraries from "./internal/optional-libraries.js";
import ModalBusView from "./internal/modal-bus-view.js";
import ModalCoverView from "./internal/modal-bus-cover-view.js";
//@@viewOff:imports

const ModalContext = UU5.Common.ModalBusContext;

const getProviderValue = Utils.Function.memo((addItem, removeItem, updateItem, isClosableItem, portalElement) => {
  return {
    render(children, id, settings, close) {
      return UU5.Common.Portal.create(
        <ModalCoverView
          onMount={() => {
            addItem(id, settings, close);
          }}
          onUnmount={() => {
            removeItem(id);
          }}
          onUpdate={() => {
            updateItem(id, settings, close);
          }}
        >
          {children}
        </ModalCoverView>,
        portalElement
      );
    },
    allowClose: isClosableItem,
  };
});

const ModalBus = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: ns.name("ModalBus"),
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    this._modalBusViewPortalElement = document.createElement("div");
    return {
      itemList: [],
      activeItemId: null,
    };
  },

  componentWillUnmount() {
    delete this._modalBusViewPortalElement;
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:private
  _addItem(id, settings, close) {
    this.setState((state) => ({
      activeItemId: id,
      itemList: [...state.itemList, { id, settings, close }],
    }));
  },

  _removeItem(id) {
    this.setState((state) => {
      let itemList = state.itemList;
      const i = itemList.findIndex((item) => item.id === id);

      if (i === itemList.length - 1) {
        itemList = itemList.slice(0, itemList.length - 1);
      }

      return {
        activeItemId: itemList.length ? itemList[itemList.length - 1]?.id : null,
        itemList,
      };
    });
  },

  _updateItem(id, settings, close) {
    this.setState((state) => {
      let itemList = [...state.itemList];
      const i = itemList.findIndex((item) => item.id === id);
      itemList[i].settings = settings;
      itemList[i].close = close;

      return {
        itemList,
      };
    });
  },

  _setActiveItem(activeItemId) {
    this.setState({ activeItemId });
  },

  _moveActiveItem(offset = 1) {
    this.setState((state) => {
      let nextIndex = state.itemList.findIndex((item) => item.id === state.activeItemId) + offset;
      if (nextIndex < state.itemList.length && nextIndex >= 0) {
        return { activeItemId: state.itemList[nextIndex].id };
      }
    });
  },

  _setNext() {
    this._moveActiveItem(1);
  },

  _setPrevious() {
    this._moveActiveItem(-1);
  },

  _isClosableItem(id) {
    // active item is item which is last opened and is currenty set as active
    return this.state.activeItemId === id && this.state.itemList[this.state.itemList.length - 1]?.id === id;
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    const { children } = this.props;
    let result;
    let { Uu5Elements } = OptionalLibraries;
    if (!Uu5Elements) {
      const { itemList, activeItemId } = this.state;

      const value = getProviderValue(
        this._addItem,
        this._removeItem,
        this._updateItem,
        this._isClosableItem,
        this._modalBusViewPortalElement
      );
      result = (
        <ModalContext.Provider value={value}>
          {children}

          <ModalBusView
            itemList={itemList}
            activeItemId={activeItemId || itemList[itemList.length - 1]?.id || null}
            onChange={this._setActiveItem}
            setNext={this._setNext}
            setPrevious={this._setPrevious}
            // NOTE We have to pass portal element that was prepared beforehand because:
            // 1. ModalBusView needs to wait for UU5.Bricks.Page, Page is inside of ModalBus (ModalBusView itself must be
            //    inside of Page's portal element for modals). I.e. ModalBusView skips 1st render and re-renders
            //    right after mount (Page is ready then).
            // 2. Modal-s do attempt to render themselves during 1st/2nd render, i.e. they need to have ModalBusView's own
            //    element ready - which becomes present in DOM *after* 2nd render and that's not good enough.
            //      => we'll prepare the element right now and pass it to ModalBusView in a prop; when Modal-s attempt to render
            //         themselves, they'll use it (even though it is not attached to DOM yet but that does not seem to be an issue)
            //         and ModalBusView will attach it to DOM when the view is ready
            portalElement={this._modalBusViewPortalElement}
          />
        </ModalContext.Provider>
      );
    } else {
      result = <Uu5Elements.ModalBus {...this.getMainPropsToPass()}>{children}</Uu5Elements.ModalBus>;
    }
    return result;
  },
  //@@viewOff:render
});

export { ModalBus };
export default ModalBus;
