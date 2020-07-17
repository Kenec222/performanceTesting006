// prettier-ignore
module.exports = {
  BOOK_AWID: null, // null <=> try to read it from uuapp.json; otherwise it can be e.g. "123456-ffffffffffffffffffffffffffffffff"
  FILES: {
    // "test00000": "doc/bricks/accordion/e00.html",
  },
  // npm run docUpdateExamples
  // npm run docUpdateSources
  COMPONENTS: [
    // "UU5.BlockLayout.Block",
    // "UU5.BlockLayout.Line",
    // "UU5.BlockLayout.Row",
    // "UU5.BlockLayout.Column",
    // "UU5.BlockLayout.Text",
    // "UU5.BlockLayout.Tile",
    // "UU5.Bricks.Accordion",
    // "UU5.Bricks.Alert",
    // "UU5.Bricks.AlertBus",
    // "UU5.Bricks.Audio",
    // "UU5.Bricks.AudioButton",
    // "UU5.Bricks.Authenticated",
    // "UU5.Bricks.Backdrop",
    // "UU5.Bricks.Badge",
    // "UU5.Bricks.Block",
    // "UU5.Bricks.Blockquote",
    // "UU5.Bricks.Box",
    // "UU5.Bricks.Button",
    // "UU5.Bricks.ButtonGroup",
    // "UU5.Bricks.ButtonSwitch",
    // "UU5.Bricks.ButtonToTop",
    // "UU5.Bricks.Calendar",
    // "UU5.Bricks.Camera",
    // "UU5.Bricks.Card",
    // "UU5.Bricks.Carousel",
    // "UU5.Bricks.ClickConfirm",
    // "UU5.Bricks.Code",
    // "UU5.Bricks.CodePreview",
    // "UU5.Bricks.ColorPalette",
    // "UU5.Bricks.Column",
    // "UU5.Bricks.ConfirmModal",
    // "UU5.Bricks.Console",
    // "UU5.Bricks.Container",
    // "UU5.Bricks.ContextMenu",
    // "UU5.Bricks.ContextMenuItem",
    // "UU5.Bricks.CookieBar",
    // "UU5.Bricks.CookiesInfo",
    // "UU5.Bricks.DataTable",
    // "UU5.Bricks.DateTime",
    // "UU5.Bricks.Dl",
    // "UU5.Bricks.DraggableItem",
    // "UU5.Bricks.DraggableMixin",
    // "UU5.Bricks.Dropdown",
    // "UU5.Bricks.DropdownItem",
    // "UU5.Bricks.Factory",
    // "UU5.Bricks.FileViewer",
    // "UU5.Bricks.FloatingBox",
    // "UU5.Bricks.Footer",
    // "UU5.Bricks.GoogleMap",
    // "UU5.Bricks.Header",
    // "UU5.Bricks.Heading",
    // "UU5.Bricks.HomeScreen",
    // "UU5.Bricks.Icon",
    // "UU5.Bricks.Iframe",
    // "UU5.Bricks.Image",
    // "UU5.Bricks.Jumbotron",
    // "UU5.Bricks.Label",
    // "UU5.Bricks.LanguageSelector",
    // "UU5.Bricks.Li",
    // "UU5.Bricks.Line",
    // "UU5.Bricks.Link",
    // "UU5.Bricks.LinkModal",
    // "UU5.Bricks.LinkUve",
    // "UU5.Bricks.Loader",
    // "UU5.Bricks.Loading",
    // "UU5.Bricks.Lsi",
    // "UU5.Bricks.LsiContext",
    // "UU5.Bricks.Mark",
    // "UU5.Bricks.Modal",
    // "UU5.Bricks.NavBar",
    // "UU5.Bricks.NavBarHeader",
    // "UU5.Bricks.NavBarNav",
    // "UU5.Bricks.NavBarNavItem",
    // "UU5.Bricks.Newspaper",
    // "UU5.Bricks.Null",
    // "UU5.Bricks.Number",
    // "UU5.Bricks.Ol",
    // "UU5.Bricks.Page",
    // "UU5.Bricks.PageMenuButton",
    // "UU5.Bricks.Pager",
    // "UU5.Bricks.Pagination",
    // "UU5.Bricks.Panel",
    // "UU5.Bricks.Popover",
    // "UU5.Bricks.PortalModal",
    // "UU5.Bricks.ProgressBar",
    // "UU5.Bricks.ProgressBarItem",
    // "UU5.Bricks.ProgressBus",
    // "UU5.Bricks.QRCode",
    // "UU5.Bricks.Rating",
    // "UU5.Bricks.Resize",
    // "UU5.Bricks.ResizeItem",
    // "UU5.Bricks.RichLink",
    // "UU5.Bricks.Row",
    // "UU5.Bricks.ScreenSize",
    // "UU5.Bricks.ScreenSizeItem",
    // "UU5.Bricks.Section",
    // "UU5.Bricks.SessionWatch",
    // "UU5.Bricks.Slider",
    // "UU5.Bricks.SliderItem",
    // "UU5.Bricks.Span",
    // "UU5.Bricks.Spreadsheet",
    // "UU5.Bricks.Stepper",
    // "UU5.Bricks.StepperItem",
    // "UU5.Bricks.Swiper",
    // "UU5.Bricks.SwiperBody",
    // "UU5.Bricks.SwiperMenu",
    // "UU5.Bricks.Switch",
    // "UU5.Bricks.SwitchSelector",
    // "UU5.Bricks.Table",
    // "UU5.Bricks.TableCol",
    // "UU5.Bricks.TableColGroup",
    // "UU5.Bricks.TableTBody",
    // "UU5.Bricks.TableTd",
    // "UU5.Bricks.TableTFoot",
    // "UU5.Bricks.TableTh",
    // "UU5.Bricks.TableTHead",
    // "UU5.Bricks.TableTr",
    // "UU5.Bricks.Tabs",
    // "UU5.Bricks.TabsItem",
    // "UU5.Bricks.Text",
    // "UU5.Bricks.Todo",
    // "UU5.Bricks.TouchIcon",
    // "UU5.Bricks.Tree",
    // "UU5.Bricks.TreeItem",
    // "UU5.Bricks.TreeList",
    // "UU5.Bricks.Ul",
    // "UU5.Bricks.Unauthenticated",
    // "UU5.Bricks.Unauthorized",
    // "UU5.Bricks.Video",
    // "UU5.Bricks.Well",
    // "UU5.Bricks.YoutubeVideo",
    // "UU5.BricksEditable.Container",
    // "UU5.BricksEditable.Section",
    // "UU5.BricksEditable",
    // "UU5.Common.BaseMixin",
    // "UU5.Common.CallsMixin",
    // "UU5.Common.CcrReaderMixin",
    // "UU5.Common.CcrWriterMixin",
    // "UU5.Common.ColorSchemaMixin",
    // "UU5.Common.ContentMixin",
    // "UU5.Common.Context",
    // "UU5.Common.Crud",
    // "UU5.Common.DataManager",
    // "UU5.Common.DnD",
    // "UU5.Common.EditableMixin",
    // "UU5.Common.ElementaryMixin",
    // "UU5.Common.Error",
    // "UU5.Common.FragmentMixin",
    // "UU5.Common.Help",
    // "UU5.Common.Identity",
    // "UU5.Common.Identity.Item",
    // "UU5.Common.IdentityMixin",
    // "UU5.Common.LevelMixin",
    // "UU5.Common.ListDataManager",
    // "UU5.Common.Loader",
    // "UU5.Common.LoadMixin",
    // "UU5.Common.LsiMixin",
    // "UU5.Common.NestingLevelMixin",
    // "UU5.Common.PropMapper",
    // "UU5.Common.PureRenderMixin",
    // "UU5.Common.ResizeMixin",
    // "UU5.Common.RouteMixin",
    // "UU5.Common.Redirect",
    // "UU5.Common.Router",
    // "UU5.Common.ScreenSizeMixin",
    // "UU5.Common.SectionMixin",
    // "UU5.Common.SessionMixin",
    // "UU5.Common.SwipeMixin",
    // "UU5.Common.TextCorrector",
    // "UU5.Common.Tools",
    // "UU5.Common.UU5Json",
    // "UU5.Common.UU5String",
    // "UU5.Common.VucMixin",
    // "UU5.Common.withVisibilityCheck",
    // "UU5.Environment.Speech",
    // "UU5.Forms.ColorPicker",
    // "UU5.Forms.ContextSection",
    // "UU5.Forms.ContextModal",
    // "UU5.Forms.Controls",
    // "UU5.Forms.ControlsMixin",
    // "UU5.Forms.DatePicker",
    // "UU5.Forms.DateRangePicker",
    // "UU5.Forms.DateTimePicker",
    // "UU5.Forms.DateTimeRangePicker",
    // "UU5.Forms.File",
    // "UU5.Forms.Form",
    // "UU5.Forms.FormMixin",
    // "UU5.Forms.GroupMixin",
    // "UU5.Forms.Checkbox",
    // "UU5.Forms.Checkboxes",
    // "UU5.Forms.ChoiceMixin",
    // "UU5.Forms.IconPicker",
    // "UU5.Forms.InputMixin",
    // "UU5.Forms.Number",
    // "UU5.Forms.PropsForm",
    // "UU5.Forms.Radios",
    // "UU5.Forms.Select",
    // "UU5.Forms.SelectOption",
    // "UU5.Forms.Slider",
    // "UU5.Forms.SwitchSelector",
    // "UU5.Forms.TagSelect",
    // "UU5.Forms.Text",
    // "UU5.Forms.TextArea",
    // "UU5.Forms.TextButton",
    // "UU5.Forms.TextIcon",
    // "UU5.Forms.TextInputMixin",
    // "UU5.Forms.TimePicker",
    // "UU5.Forms.TriStateCheckbox",
    // "UU5.Hooks.useCall",
    // "UU5.Hooks.useData",
    // "UU5.Hooks.useDataList",
    // "UU5.Hooks.useDataObject",
    // "UU5.Hooks.useDevice",
    // "UU5.Hooks.useElementSize",
    // "UU5.Hooks.useLanguage",
    // "UU5.Hooks.useLevel",
    // "UU5.Hooks.useListData",
    // "UU5.Hooks.useLsi",
    // "UU5.Hooks.useLsiValues",
    // "UU5.Hooks.usePagingListData",
    // "UU5.Hooks.useScreenSize",
    // "UU5.Hooks.useSession",
  ]
};
