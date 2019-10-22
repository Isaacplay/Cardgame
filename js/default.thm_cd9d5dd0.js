window.skins=window.skins||{};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","home":"resource/skins/home.exml","aboutsene":"resource/skins/aboutsene.exml","shopsene":"resource/skins/shopsene.exml","herosense":"resource/skins/herosense.exml","battlesense":"resource/skins/battlesense.exml","E1sense":"resource/skins/E1sense.exml","battlechoose":"resource/skins/battlechoose.exml","battle_login":"resource/skins/battle_login.exml","battle_lobby":"resource/skins/battle_lobby.exml","bat_match":"resource/skins/bat_match.exml","game_results":"resource/skins/game_results.exml","error_note":"resource/skins/error_note.exml","RoomListUI":"resource/skins/RoomListUI.exml","RoomItem":"resource/skins/RoomItem.exml","MatchRoomID":"resource/skins/MatchRoomID.exml","matchroom":"resource/eui_skins/matchroom.exml","PVPBattle":"resource/eui_skins/PVPBattle.exml","ReconnectUI":"resource/skins/ReconnectUI.exml","CKsense":"resource/skins/CKsense.exml","salesense":"resource/eui_skins/salesense.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 50;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBox.exml'] = window.skins.CheckBox = (function (_super) {
	__extends(CheckBox, _super);
	function CheckBox() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox1_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox1_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox1_select_disabled_png")
				])
		];
	}
	var _proto = CheckBox.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox1_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "upAndSelected";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5),
					new eui.SetProperty("labelDisplay","size",40),
					new eui.SetProperty("labelDisplay","textColor",0x000000),
					new eui.SetProperty("labelDisplay","bold",true)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png"),
					new eui.SetProperty("labelDisplay","size",40),
					new eui.SetProperty("labelDisplay","textColor",0x020000)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "clip";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin2.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox1_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox1_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox1_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox1_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/matchroom.exml'] = window.matchroomSkin = (function (_super) {
	__extends(matchroomSkin, _super);
	var matchroomSkin$Skin1 = 	(function (_super) {
		__extends(matchroomSkin$Skin1, _super);
		function matchroomSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = matchroomSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return matchroomSkin$Skin1;
	})(eui.Skin);

	function matchroomSkin() {
		_super.call(this);
		this.skinParts = ["btn_return","lab_title","lab_userID","img_header","rect_roomID","edt_roomID","btn_start","lab_note"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Label1_i(),this._Group2_i(),this.btn_start_i(),this.lab_note_i()];
	}
	var _proto = matchroomSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.left = 0;
		t.source = "灵山神墟_jpg";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 6.41;
		t.anchorOffsetY = -12;
		t.height = 200;
		t.width = 1704;
		t.x = 169.41;
		t.y = 62;
		t.elementsContent = [this.btn_return_i(),this.lab_title_i(),this._Rect1_i(),this.lab_userID_i(),this.img_header_i()];
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.label = "";
		t.width = 115;
		t.x = 51;
		t.y = 39;
		t.skinName = matchroomSkin$Skin1;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.size = 90;
		t.text = "房间列表";
		t.width = 436;
		t.x = 166;
		t.y = 53;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 164;
		t.strokeColor = 0x0065ff;
		t.strokeWeight = 3;
		t.width = 164;
		t.x = 1103;
		t.y = 18;
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.size = 60;
		t.text = "用户ID：";
		t.width = 432;
		t.x = 1267;
		t.y = 75;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.height = 164;
		t.width = 164;
		t.x = 1103;
		t.y = 18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.size = 45;
		t.text = "请输入房间号";
		t.width = 282;
		t.x = 382;
		t.y = 346;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.width = 1358;
		t.x = 370;
		t.y = 416;
		t.elementsContent = [this.rect_roomID_i(),this.edt_roomID_i()];
		return t;
	};
	_proto.rect_roomID_i = function () {
		var t = new eui.Rect();
		this.rect_roomID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xfcfcfc;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1358;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.edt_roomID_i = function () {
		var t = new eui.EditableText();
		this.edt_roomID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 114;
		t.size = 90;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 1332;
		t.x = 16;
		t.y = 16;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.label = "进入房间";
		t.width = 387;
		t.x = 766.5;
		t.y = 874;
		return t;
	};
	_proto.lab_note_i = function () {
		var t = new eui.Label();
		this.lab_note = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.size = 45;
		t.text = "提醒：";
		t.textColor = 0xff0000;
		t.width = 624;
		t.x = 376;
		t.y = 612;
		return t;
	};
	return matchroomSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/bat_escape.exml'] = window.bat_escape = (function (_super) {
	__extends(bat_escape, _super);
	function bat_escape() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 86;
		this.width = 184;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = bat_escape.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bat_1_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = -1;
		t.y = 0;
		return t;
	};
	return bat_escape;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/bat_over.exml'] = window.bat_over = (function (_super) {
	__extends(bat_over, _super);
	function bat_over() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 86;
		this.width = 184;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = bat_over.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bat_2_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = -1;
		t.y = 0;
		return t;
	};
	return bat_over;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PVPBattle.exml'] = window.PVPBattleSkin = (function (_super) {
	__extends(PVPBattleSkin, _super);
	function PVPBattleSkin() {
		_super.call(this);
		this.skinParts = ["hpplay","hpemy","lab_1","lab_2","escape","over","cost","img_header"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.hpplay_i(),this.hpemy_i(),this.lab_1_i(),this.lab_2_i(),this.escape_i(),this.over_i(),this._Rect1_i(),this.cost_i(),this._Image3_i(),this.img_header_i()];
	}
	var _proto = PVPBattleSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.left = 0;
		t.source = "万圣_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.04;
		t.rotation = 34.31;
		t.source = "bg_srowll_png";
		t.width = 1526.12;
		t.x = 582.08;
		t.y = 24;
		return t;
	};
	_proto.hpplay_i = function () {
		var t = new eui.Rect();
		this.hpplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xf90707;
		t.height = 792;
		t.width = 28;
		t.x = 60;
		t.y = 248;
		return t;
	};
	_proto.hpemy_i = function () {
		var t = new eui.Rect();
		this.hpemy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x003aff;
		t.height = 582;
		t.width = 26;
		t.x = 1829.61;
		t.y = 24;
		return t;
	};
	_proto.lab_1_i = function () {
		var t = new eui.Label();
		this.lab_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.size = 45;
		t.text = "";
		t.width = 184;
		t.x = 21;
		t.y = 196;
		return t;
	};
	_proto.lab_2_i = function () {
		var t = new eui.Label();
		this.lab_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.size = 45;
		t.text = "";
		t.width = 184;
		t.x = 1733;
		t.y = 618;
		return t;
	};
	_proto.escape_i = function () {
		var t = new eui.Button();
		this.escape = t;
		t.height = 86;
		t.label = "Button";
		t.skinName = "bat_escape";
		t.width = 184;
		t.x = 1376;
		t.y = 905.71;
		return t;
	};
	_proto.over_i = function () {
		var t = new eui.Button();
		this.over = t;
		t.height = 86;
		t.label = "Button";
		t.skinName = "bat_over";
		t.width = 184;
		t.x = 1612;
		t.y = 905.71;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x776f6f;
		t.height = 74;
		t.width = 176;
		t.x = 1376;
		t.y = 760;
		return t;
	};
	_proto.cost_i = function () {
		var t = new eui.Label();
		this.cost = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.size = 50;
		t.text = "cost";
		t.width = 124;
		t.x = 1406;
		t.y = 776;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 374;
		t.source = "timg_jpg";
		t.width = 457;
		t.x = 1315.5;
		t.y = 46;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 146;
		t.width = 152;
		t.x = 1508;
		t.y = 123;
		return t;
	};
	return PVPBattleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/salesense.exml'] = window.salesenseSkin = (function (_super) {
	__extends(salesenseSkin, _super);
	var salesenseSkin$Skin2 = 	(function (_super) {
		__extends(salesenseSkin$Skin2, _super);
		function salesenseSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = salesenseSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return salesenseSkin$Skin2;
	})(eui.Skin);

	function salesenseSkin() {
		_super.call(this);
		this.skinParts = ["lis_hero","scr_hero","btn_tc","lab_money"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.scr_hero_i(),this.btn_tc_i(),this.lab_money_i()];
	}
	var _proto = salesenseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "夜市_jpg";
		t.top = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.87;
		t.fillColor = 0xf44f4b;
		t.height = 500;
		t.width = 1692;
		t.x = 114;
		t.y = 540;
		return t;
	};
	_proto.scr_hero_i = function () {
		var t = new eui.Scroller();
		this.scr_hero = t;
		t.height = 446;
		t.width = 1620;
		t.x = 148.5;
		t.y = 566;
		t.viewport = this.lis_hero_i();
		return t;
	};
	_proto.lis_hero_i = function () {
		var t = new eui.List();
		this.lis_hero = t;
		t.itemRendererSkinName = hero_show;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.btn_tc_i = function () {
		var t = new eui.Button();
		this.btn_tc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.label = "";
		t.width = 181;
		t.x = 0;
		t.y = 50;
		t.skinName = salesenseSkin$Skin2;
		return t;
	};
	_proto.lab_money_i = function () {
		var t = new eui.Label();
		this.lab_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.size = 60;
		t.text = "金币：";
		t.width = 460;
		t.x = 1370;
		t.y = 30;
		return t;
	};
	return salesenseSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/tc1.exml'] = window.tc1 = (function (_super) {
	__extends(tc1, _super);
	function tc1() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = tc1.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "tc_png";
		t.top = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return tc1;
})(eui.Skin);generateEUI.paths['resource/skins/aboutsene.exml'] = window.aboutseneSkin = (function (_super) {
	__extends(aboutseneSkin, _super);
	function aboutseneSkin() {
		_super.call(this);
		this.skinParts = ["tc1"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.tc1_i()];
	}
	var _proto = aboutseneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "about_back_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 173;
		t.left = 0;
		t.source = "3_jpg";
		t.width = 188;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 190;
		t.right = 0;
		t.source = "4_jpg";
		t.width = 197;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "2_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "12_png";
		t.x = 0;
		t.y = 500;
		return t;
	};
	_proto.tc1_i = function () {
		var t = new eui.Button();
		this.tc1 = t;
		t.height = 50;
		t.label = "Button";
		t.right = 0;
		t.skinName = "tc1";
		t.top = 0;
		t.width = 50;
		return t;
	};
	return aboutseneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/bat_match.exml'] = window.bat_matchSkin = (function (_super) {
	__extends(bat_matchSkin, _super);
	var bat_matchSkin$Skin3 = 	(function (_super) {
		__extends(bat_matchSkin$Skin3, _super);
		function bat_matchSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = bat_matchSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return bat_matchSkin$Skin3;
	})(eui.Skin);

	function bat_matchSkin() {
		_super.call(this);
		this.skinParts = ["btn_return","lab_lobby","lab_userID","lab_matchmode","lab_roomID","rect_player1","rect_player2","img_owner","btn_kick2","btn_start","check_closeRoom","lab_player1","lab_player2","lab_userID1","lab_userID2"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.lab_roomID_i(),this.rect_player1_i(),this.rect_player2_i(),this.img_owner_i(),this.btn_kick2_i(),this.btn_start_i(),this.check_closeRoom_i(),this.lab_player1_i(),this.lab_player2_i(),this.lab_userID1_i(),this.lab_userID2_i()];
	}
	var _proto = bat_matchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.left = 0;
		t.source = "原野-夜_jpg";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.width = 1640;
		t.x = 177;
		t.y = 64;
		t.elementsContent = [this.btn_return_i(),this.lab_lobby_i(),this.lab_userID_i(),this.lab_matchmode_i()];
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.label = "";
		t.width = 95;
		t.x = 0;
		t.y = 17;
		t.skinName = bat_matchSkin$Skin3;
		return t;
	};
	_proto.lab_lobby_i = function () {
		var t = new eui.Label();
		this.lab_lobby = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 50;
		t.text = "等待玩家加入";
		t.width = 346;
		t.x = 95;
		t.y = 33;
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 50;
		t.text = "用户ID：";
		t.width = 374;
		t.x = 1231;
		t.y = 25;
		return t;
	};
	_proto.lab_matchmode_i = function () {
		var t = new eui.Label();
		this.lab_matchmode = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 50;
		t.text = "";
		t.width = 580;
		t.x = 460;
		t.y = 25;
		return t;
	};
	_proto.lab_roomID_i = function () {
		var t = new eui.Label();
		this.lab_roomID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 40;
		t.text = "房间号：";
		t.width = 346;
		t.x = 177;
		t.y = 207;
		return t;
	};
	_proto.rect_player1_i = function () {
		var t = new eui.Rect();
		this.rect_player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 400;
		t.ellipseWidth = 400;
		t.fillColor = 0x6a82c9;
		t.height = 400;
		t.width = 400;
		t.x = 372;
		t.y = 387;
		return t;
	};
	_proto.rect_player2_i = function () {
		var t = new eui.Rect();
		this.rect_player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 400;
		t.ellipseWidth = 400;
		t.fillColor = 0x6A82C9;
		t.height = 400;
		t.width = 400;
		t.x = 1088;
		t.y = 387;
		return t;
	};
	_proto.img_owner_i = function () {
		var t = new eui.Image();
		this.img_owner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "owner_png";
		t.width = 186;
		t.x = 479;
		t.y = 747;
		return t;
	};
	_proto.btn_kick2_i = function () {
		var t = new eui.Button();
		this.btn_kick2 = t;
		t.height = 80;
		t.label = "踢掉";
		t.width = 186;
		t.x = 1195;
		t.y = 747;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 128;
		t.label = "开始游戏";
		t.width = 309;
		t.x = 772.5;
		t.y = 934;
		return t;
	};
	_proto.check_closeRoom_i = function () {
		var t = new eui.CheckBox();
		this.check_closeRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 81;
		t.label = "允许加入";
		t.width = 263;
		t.x = 818.5;
		t.y = 827;
		return t;
	};
	_proto.lab_player1_i = function () {
		var t = new eui.Label();
		this.lab_player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.size = 200;
		t.text = "1";
		t.width = 132;
		t.x = 505;
		t.y = 492;
		return t;
	};
	_proto.lab_player2_i = function () {
		var t = new eui.Label();
		this.lab_player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.size = 200;
		t.text = "2";
		t.width = 132;
		t.x = 1222;
		t.y = 492;
		return t;
	};
	_proto.lab_userID1_i = function () {
		var t = new eui.Label();
		this.lab_userID1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 40;
		t.text = "待加入";
		t.width = 138;
		t.x = 523;
		t.y = 827;
		return t;
	};
	_proto.lab_userID2_i = function () {
		var t = new eui.Label();
		this.lab_userID2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 40;
		t.text = "待加入";
		t.width = 138;
		t.x = 1222;
		t.y = 827;
		return t;
	};
	return bat_matchSkin;
})(eui.Skin);generateEUI.paths['resource/skins/battle_lobby.exml'] = window.battle_lobbySkin = (function (_super) {
	__extends(battle_lobbySkin, _super);
	var battle_lobbySkin$Skin4 = 	(function (_super) {
		__extends(battle_lobbySkin$Skin4, _super);
		function battle_lobbySkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = battle_lobbySkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_lobbySkin$Skin4;
	})(eui.Skin);

	function battle_lobbySkin() {
		_super.call(this);
		this.skinParts = ["lab_joinRandRoom","lab_createRoom","lab_roomList","lab_joinRoom","lab_lobby","lab_userID","img_header","btn_return"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.lab_joinRandRoom_i(),this.lab_createRoom_i(),this.lab_roomList_i(),this.lab_joinRoom_i(),this.lab_lobby_i(),this._Rect1_i(),this.lab_userID_i(),this.img_header_i(),this.btn_return_i()];
	}
	var _proto = battle_lobbySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.left = 0;
		t.source = "贯月舟-夜_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.source = "arrow_left_png";
		t.width = 60;
		t.x = 272;
		t.y = 303;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.source = "arrow_left_png";
		t.width = 60;
		t.x = 1068;
		t.y = 303;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 90;
		t.source = "bg_srowll_png";
		t.width = 916;
		t.x = 960;
		t.y = 82;
		return t;
	};
	_proto.lab_joinRandRoom_i = function () {
		var t = new eui.Label();
		this.lab_joinRandRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.size = 80;
		t.text = "随机匹配";
		t.width = 346;
		t.x = 384;
		t.y = 303;
		return t;
	};
	_proto.lab_createRoom_i = function () {
		var t = new eui.Label();
		this.lab_createRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.size = 80;
		t.text = "创建房间";
		t.width = 348;
		t.x = 1188;
		t.y = 303;
		return t;
	};
	_proto.lab_roomList_i = function () {
		var t = new eui.Label();
		this.lab_roomList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.size = 50;
		t.text = "查看房间列表";
		t.width = 304;
		t.x = 1188;
		t.y = 500;
		return t;
	};
	_proto.lab_joinRoom_i = function () {
		var t = new eui.Label();
		this.lab_joinRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.size = 50;
		t.text = "加入指定房间";
		t.width = 304;
		t.x = 1188;
		t.y = 644;
		return t;
	};
	_proto.lab_lobby_i = function () {
		var t = new eui.Label();
		this.lab_lobby = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.size = 60;
		t.text = "游戏大厅";
		t.width = 246;
		t.x = 118;
		t.y = 46;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0xbca6a6;
		t.height = 60;
		t.strokeColor = 0x00deff;
		t.strokeWeight = 3;
		t.width = 60;
		t.x = 1475.52;
		t.y = 76;
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.size = 45;
		t.text = "用户ID：235699";
		t.width = 352;
		t.x = 1565;
		t.y = 92;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.height = 60;
		t.width = 60;
		t.x = 1475.52;
		t.y = 78;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.label = "";
		t.width = 69;
		t.x = 30;
		t.y = 44;
		t.skinName = battle_lobbySkin$Skin4;
		return t;
	};
	return battle_lobbySkin;
})(eui.Skin);generateEUI.paths['resource/skins/battle_login.exml'] = window.battle_loginSkin = (function (_super) {
	__extends(battle_loginSkin, _super);
	var battle_loginSkin$Skin5 = 	(function (_super) {
		__extends(battle_loginSkin$Skin5, _super);
		function battle_loginSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = battle_loginSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_loginSkin$Skin5;
	})(eui.Skin);

	function battle_loginSkin() {
		_super.call(this);
		this.skinParts = ["txt_gameID","txt_appKey","txt_secretKey","btn_enter","btn_clear","lab_clearNote","btn_return"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.txt_gameID_i(),this.txt_appKey_i(),this.txt_secretKey_i(),this.btn_enter_i(),this.btn_clear_i(),this.lab_clearNote_i(),this.btn_return_i()];
	}
	var _proto = battle_loginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.left = 0;
		t.source = "back_hero_jpg";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 60;
		t.text = "gameID";
		t.width = 212;
		t.x = 484;
		t.y = 279;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.size = 90;
		t.text = "寻找连线区";
		t.width = 508;
		t.x = 706;
		t.y = 96;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 60;
		t.text = "appKey";
		t.width = 212;
		t.x = 484;
		t.y = 422;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 60;
		t.text = "secretKey";
		t.width = 212;
		t.x = 494;
		t.y = 562;
		return t;
	};
	_proto.txt_gameID_i = function () {
		var t = new eui.TextInput();
		this.txt_gameID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.width = 842;
		t.x = 752;
		t.y = 257;
		return t;
	};
	_proto.txt_appKey_i = function () {
		var t = new eui.TextInput();
		this.txt_appKey = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.width = 842;
		t.x = 752;
		t.y = 411;
		return t;
	};
	_proto.txt_secretKey_i = function () {
		var t = new eui.TextInput();
		this.txt_secretKey = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.width = 842;
		t.x = 752;
		t.y = 551;
		return t;
	};
	_proto.btn_enter_i = function () {
		var t = new eui.Button();
		this.btn_enter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.label = "登入";
		t.width = 404;
		t.x = 758;
		t.y = 700;
		return t;
	};
	_proto.btn_clear_i = function () {
		var t = new eui.Button();
		this.btn_clear = t;
		t.anchorOffsetX = 0;
		t.height = 86;
		t.label = "清除缓存";
		t.width = 223;
		t.x = 1301.5;
		t.y = 700;
		return t;
	};
	_proto.lab_clearNote_i = function () {
		var t = new eui.Group();
		this.lab_clearNote = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.visible = false;
		t.width = 494;
		t.x = 958;
		t.y = 834;
		t.elementsContent = [this._Rect1_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x8c7e7e;
		t.height = 66;
		t.left = 0;
		t.top = 0;
		t.width = 494;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 50;
		t.text = "缓存清除成功";
		t.width = 390;
		t.x = 104;
		t.y = 5;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.label = "";
		t.width = 113;
		t.x = 49.5;
		t.y = 45;
		t.skinName = battle_loginSkin$Skin5;
		return t;
	};
	return battle_loginSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/pve.exml'] = window.pve = (function (_super) {
	__extends(pve, _super);
	function pve() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 346;
		this.width = 218;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = pve.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "pve_png";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	return pve;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/pvp.exml'] = window.pvp = (function (_super) {
	__extends(pvp, _super);
	function pvp() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 346;
		this.width = 218;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = pvp.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "pvp_png";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	return pvp;
})(eui.Skin);generateEUI.paths['resource/skins/battlechoose.exml'] = window.battlechooseSkin = (function (_super) {
	__extends(battlechooseSkin, _super);
	function battlechooseSkin() {
		_super.call(this);
		this.skinParts = ["bt_pve","bt_pvp","tc"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.bt_pve_i(),this.bt_pvp_i(),this.tc_i()];
	}
	var _proto = battlechooseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "battle_choose_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1167;
		t.source = "yue1_png";
		t.width = 1136;
		t.x = 1018;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "guigu1_png";
		t.x = -256;
		t.y = 0;
		return t;
	};
	_proto.bt_pve_i = function () {
		var t = new eui.Button();
		this.bt_pve = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 346;
		t.label = "Button";
		t.skinName = "pve";
		t.width = 218;
		t.x = 660;
		t.y = 695;
		return t;
	};
	_proto.bt_pvp_i = function () {
		var t = new eui.Button();
		this.bt_pvp = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 346;
		t.label = "Button";
		t.skinName = "pvp";
		t.width = 218;
		t.x = 1048;
		t.y = 695;
		return t;
	};
	_proto.tc_i = function () {
		var t = new eui.Button();
		this.tc = t;
		t.label = "Button";
		t.right = 0;
		t.skinName = "tc1";
		t.top = 0;
		t.width = 50;
		return t;
	};
	return battlechooseSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/E1.exml'] = window.E = (function (_super) {
	__extends(E, _super);
	function E() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 200;
		this.width = 200;
		this.elementsContent = [this._Image2_i()];
		this._Image1_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","percentWidth",90),
					new eui.SetProperty("_Image2","percentHeight",90)
				])
			,
			new eui.State ("clear",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = E.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.left = 0;
		t.source = "E1_2_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "E1_1_png";
		t.top = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return E;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/E2.exml'] = window.E2 = (function (_super) {
	__extends(E2, _super);
	function E2() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 200;
		this.width = 200;
		this.elementsContent = [this._Image2_i()];
		this._Image1_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","percentWidth",90),
					new eui.SetProperty("_Image2","percentHeight",90)
				])
			,
			new eui.State ("clear",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = E2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.left = 0;
		t.source = "E2_2_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "E2_1_png";
		t.top = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return E2;
})(eui.Skin);generateEUI.paths['resource/skins/battlesense.exml'] = window.battlesenseSkin = (function (_super) {
	__extends(battlesenseSkin, _super);
	function battlesenseSkin() {
		_super.call(this);
		this.skinParts = ["tc","E_1","E_2"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.tc_i(),this.E_1_i(),this.E_2_i()];
	}
	var _proto = battlesenseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "zhurong_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.source = "bat_down_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.source = "batle_down_1_png";
		return t;
	};
	_proto.tc_i = function () {
		var t = new eui.Button();
		this.tc = t;
		t.label = "Button";
		t.skinName = "tc1";
		t.width = 50;
		t.x = 1867;
		t.y = 0;
		return t;
	};
	_proto.E_1_i = function () {
		var t = new eui.Button();
		this.E_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.label = "Button";
		t.skinName = "E";
		t.width = 200;
		t.x = 396;
		t.y = 460;
		return t;
	};
	_proto.E_2_i = function () {
		var t = new eui.Button();
		this.E_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.label = "Button";
		t.skinName = "E2";
		t.width = 200;
		t.x = 860;
		t.y = 400.5;
		return t;
	};
	return battlesenseSkin;
})(eui.Skin);generateEUI.paths['resource/skins/CKsense.exml'] = window.CKsenseSkin = (function (_super) {
	__extends(CKsenseSkin, _super);
	var CKsenseSkin$Skin6 = 	(function (_super) {
		__extends(CKsenseSkin$Skin6, _super);
		function CKsenseSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = CKsenseSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CKsenseSkin$Skin6;
	})(eui.Skin);

	function CKsenseSkin() {
		_super.call(this);
		this.skinParts = ["btn_banck","lab_money","btn_start"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.btn_banck_i(),this._Label1_i(),this.lab_money_i(),this.btn_start_i(),this._Label2_i()];
	}
	var _proto = CKsenseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "魂体融合_jpg";
		t.top = 0;
		return t;
	};
	_proto.btn_banck_i = function () {
		var t = new eui.Button();
		this.btn_banck = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.label = "";
		t.width = 122;
		t.x = 44;
		t.y = 52;
		t.skinName = CKsenseSkin$Skin6;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.size = 60;
		t.text = "抽卡";
		t.width = 244;
		t.x = 166;
		t.y = 80;
		return t;
	};
	_proto.lab_money_i = function () {
		var t = new eui.Label();
		this.lab_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 45;
		t.text = "你的金币：";
		t.width = 362;
		t.x = 1496;
		t.y = 24;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.label = "抽取4次";
		t.width = 261;
		t.x = 828;
		t.y = 856;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.text = "消耗5000";
		t.width = 140;
		t.x = 888.5;
		t.y = 1022;
		return t;
	};
	return CKsenseSkin;
})(eui.Skin);generateEUI.paths['resource/skins/E1sense.exml'] = window.E1senseSkin = (function (_super) {
	__extends(E1senseSkin, _super);
	function E1senseSkin() {
		_super.call(this);
		this.skinParts = ["over","escape","boss","cost","play_hp","boss_hp","hp_play","hp_boss"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.over_i(),this.escape_i(),this.boss_i(),this._Image3_i(),this._Image4_i(),this.cost_i(),this.play_hp_i(),this.boss_hp_i(),this.hp_play_i(),this.hp_boss_i()];
	}
	var _proto = E1senseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "E_back_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.source = "E_down_png";
		return t;
	};
	_proto.over_i = function () {
		var t = new eui.Button();
		this.over = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.label = "Button";
		t.skinName = "bat_over";
		t.width = 184;
		t.x = 1706;
		t.y = 970;
		return t;
	};
	_proto.escape_i = function () {
		var t = new eui.Button();
		this.escape = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.label = "Button";
		t.skinName = "bat_escape";
		t.width = 184;
		t.x = 1706;
		t.y = 841;
		return t;
	};
	_proto.boss_i = function () {
		var t = new eui.Image();
		this.boss = t;
		t.source = "E1_boss_png";
		t.x = 484;
		t.y = -168;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bat_4_png";
		t.visible = false;
		t.x = 1432.03;
		t.y = 771;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "bat_3_png";
		t.x = 1706;
		t.y = 771;
		return t;
	};
	_proto.cost_i = function () {
		var t = new eui.Label();
		this.cost = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.text = "Label";
		t.width = 182;
		t.x = 1766;
		t.y = 791;
		return t;
	};
	_proto.play_hp_i = function () {
		var t = new eui.Label();
		this.play_hp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.text = "Label";
		t.width = 118;
		t.x = 26;
		t.y = 703.5;
		return t;
	};
	_proto.boss_hp_i = function () {
		var t = new eui.Label();
		this.boss_hp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.text = "Label";
		t.width = 118;
		t.x = 1739;
		t.y = 707;
		return t;
	};
	_proto.hp_play_i = function () {
		var t = new eui.Image();
		this.hp_play = t;
		t.source = "hp1_png";
		t.x = 141;
		t.y = 704;
		return t;
	};
	_proto.hp_boss_i = function () {
		var t = new eui.Image();
		this.hp_boss = t;
		t.source = "hp2_png";
		t.x = 1226;
		t.y = 704;
		return t;
	};
	return E1senseSkin;
})(eui.Skin);generateEUI.paths['resource/skins/error_note.exml'] = window.error_noteSkin = (function (_super) {
	__extends(error_noteSkin, _super);
	var error_noteSkin$Skin7 = 	(function (_super) {
		__extends(error_noteSkin$Skin7, _super);
		function error_noteSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = error_noteSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return error_noteSkin$Skin7;
	})(eui.Skin);

	function error_noteSkin() {
		_super.call(this);
		this.skinParts = ["btn_return","lab_title","lab_userID","lab_content","btn_reconnect"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this.btn_reconnect_i()];
	}
	var _proto = error_noteSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "子午台_jpg";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.width = 1622.48;
		t.x = 153.52;
		t.y = 92;
		t.elementsContent = [this.btn_return_i(),this.lab_title_i(),this.lab_userID_i()];
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "";
		t.width = 84;
		t.x = 26;
		t.y = 26;
		t.skinName = error_noteSkin$Skin7;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.size = 60;
		t.text = "错误";
		t.width = 196;
		t.x = 136;
		t.y = 26;
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 50;
		t.text = "用户ID：";
		t.width = 464;
		t.x = 1130;
		t.y = 26;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 587.88;
		t.width = 912.12;
		t.x = 508.7;
		t.y = 314.48;
		t.elementsContent = [this._Rect1_i(),this.lab_content_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 587;
		t.left = 0;
		t.top = 0;
		t.width = 912;
		return t;
	};
	_proto.lab_content_i = function () {
		var t = new eui.Label();
		this.lab_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.7;
		t.text = "error";
		t.textColor = 0xff0000;
		t.width = 849.76;
		t.x = 33.24;
		t.y = 29.82;
		return t;
	};
	_proto.btn_reconnect_i = function () {
		var t = new eui.Button();
		this.btn_reconnect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85.7;
		t.label = "重连";
		t.width = 257.97;
		t.x = 829.52;
		t.y = 945.58;
		return t;
	};
	return error_noteSkin;
})(eui.Skin);generateEUI.paths['resource/skins/game_results.exml'] = window.game_resultsSkin = (function (_super) {
	__extends(game_resultsSkin, _super);
	function game_resultsSkin() {
		_super.call(this);
		this.skinParts = ["lab_roomID","lab_userID1","lab_userID2","lab_score1","lab_score2","btn_leave"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.lab_roomID_i(),this._Image2_i(),this.lab_userID1_i(),this.lab_userID2_i(),this.lab_score1_i(),this.lab_score2_i(),this._Rect1_i(),this._Rect2_i(),this.btn_leave_i()];
	}
	var _proto = game_resultsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "零陵界-夜_jpg";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.size = 80;
		t.text = "游戏结果";
		t.width = 334;
		t.x = 793;
		t.y = 102;
		return t;
	};
	_proto.lab_roomID_i = function () {
		var t = new eui.Label();
		this.lab_roomID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.text = "房间ID：";
		t.width = 350;
		t.x = 815;
		t.y = 212;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.source = "owner_png";
		t.width = 154;
		t.x = 542;
		t.y = 314;
		return t;
	};
	_proto.lab_userID1_i = function () {
		var t = new eui.Label();
		this.lab_userID1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.size = 60;
		t.text = "userID1";
		t.width = 292;
		t.x = 730;
		t.y = 314;
		return t;
	};
	_proto.lab_userID2_i = function () {
		var t = new eui.Label();
		this.lab_userID2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.size = 60;
		t.text = "userID1";
		t.width = 292;
		t.x = 730;
		t.y = 540;
		return t;
	};
	_proto.lab_score1_i = function () {
		var t = new eui.Label();
		this.lab_score1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.size = 60;
		t.text = "STABLE";
		t.width = 268;
		t.x = 1127;
		t.y = 314;
		return t;
	};
	_proto.lab_score2_i = function () {
		var t = new eui.Label();
		this.lab_score2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.size = 60;
		t.text = "STABLE";
		t.width = 268;
		t.x = 1127;
		t.y = 540;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.width = 1030;
		t.x = 475;
		t.y = 420;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.width = 1030;
		t.x = 475;
		t.y = 648;
		return t;
	};
	_proto.btn_leave_i = function () {
		var t = new eui.Button();
		this.btn_leave = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.label = "离开游戏";
		t.width = 419;
		t.x = 812.5;
		t.y = 850;
		return t;
	};
	return game_resultsSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/tc2.exml'] = window.tc2 = (function (_super) {
	__extends(tc2, _super);
	function tc2() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = tc2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "tc2_png";
		t.top = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return tc2;
})(eui.Skin);generateEUI.paths['resource/skins/herosense.exml'] = window.herosenseSkin = (function (_super) {
	__extends(herosenseSkin, _super);
	function herosenseSkin() {
		_super.call(this);
		this.skinParts = ["hero_1","hero_2","hero_3","hero_4","lis_hero","scr_hero","tc","btn_sale"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.hero_1_i(),this.hero_2_i(),this.hero_3_i(),this.hero_4_i(),this.scr_hero_i(),this.tc_i(),this.btn_sale_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image1"],[0],this.hero_1,"source");
	}
	var _proto = herosenseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "back_hero_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.source = "hero_back1_png";
		t.x = 186;
		t.y = 46;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.source = "hero_back2_png";
		t.x = 186;
		t.y = 570;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.source = "hero_back2 _png";
		t.x = 186;
		t.y = 540;
		return t;
	};
	_proto.hero_1_i = function () {
		var t = new eui.Image();
		this.hero_1 = t;
		t.height = 339;
		t.width = 365;
		t.x = 1479;
		t.y = 77.5;
		return t;
	};
	_proto.hero_2_i = function () {
		var t = new eui.Image();
		this.hero_2 = t;
		t.height = 339;
		t.width = 365;
		t.x = 642;
		t.y = 77.5;
		return t;
	};
	_proto.hero_3_i = function () {
		var t = new eui.Image();
		this.hero_3 = t;
		t.height = 339;
		t.width = 365;
		t.x = 1061;
		t.y = 77.5;
		return t;
	};
	_proto.hero_4_i = function () {
		var t = new eui.Image();
		this.hero_4 = t;
		t.height = 339;
		t.width = 365;
		t.x = 228;
		t.y = 77.5;
		return t;
	};
	_proto.scr_hero_i = function () {
		var t = new eui.Scroller();
		this.scr_hero = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 446;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 1620;
		t.x = 232;
		t.y = 594;
		t.viewport = this.lis_hero_i();
		return t;
	};
	_proto.lis_hero_i = function () {
		var t = new eui.List();
		this.lis_hero = t;
		t.height = 484;
		t.itemRendererSkinName = hero_show;
		t.x = -8;
		t.y = -23;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto.tc_i = function () {
		var t = new eui.Button();
		this.tc = t;
		t.label = "Button";
		t.skinName = "tc2";
		t.width = 50;
		t.x = 1867;
		t.y = 0;
		return t;
	};
	_proto.btn_sale_i = function () {
		var t = new eui.Button();
		this.btn_sale = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 264;
		t.label = "出售";
		t.width = 101;
		t.x = 36;
		t.y = 685;
		return t;
	};
	return herosenseSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/btnzd.exml'] = window.btnzd = (function (_super) {
	__extends(btnzd, _super);
	function btnzd() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 108;
		this.width = 200;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = btnzd.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "btn_zd_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = -1;
		t.y = 0;
		return t;
	};
	return btnzd;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/btnpz.exml'] = window.btnpz = (function (_super) {
	__extends(btnpz, _super);
	function btnpz() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 108;
		this.width = 200;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = btnpz.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "btn_pz_png";
		t.top = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return btnpz;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/btnsc.exml'] = window.btn = (function (_super) {
	__extends(btn, _super);
	function btn() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 108;
		this.width = 200;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = btn.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.horizontalCenter = 0;
		t.source = "btn_sc_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return btn;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/btngy.exml'] = window.btngy = (function (_super) {
	__extends(btngy, _super);
	function btngy() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 108;
		this.width = 200;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = btngy.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "btn_gy_png";
		t.top = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return btngy;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/cha.exml'] = window.CHA = (function (_super) {
	__extends(CHA, _super);
	function CHA() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 54;
		this.width = 54;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = CHA.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "cha_png";
		t.top = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return CHA;
})(eui.Skin);generateEUI.paths['resource/skins/home.exml'] = window.homeSkin = (function (_super) {
	__extends(homeSkin, _super);
	function homeSkin() {
		_super.call(this);
		this.skinParts = ["btn_zd","btn_pz","btn_sc","btn_gy","lis_button","Group_mbtn","cha"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.Group_mbtn_i(),this.cha_i()];
	}
	var _proto = homeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "back_home_jpg";
		t.top = 0;
		return t;
	};
	_proto.Group_mbtn_i = function () {
		var t = new eui.Group();
		this.Group_mbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 108;
		t.right = 0;
		t.width = 800;
		t.elementsContent = [this.btn_zd_i(),this.btn_pz_i(),this.btn_sc_i(),this.btn_gy_i(),this._Group1_i()];
		return t;
	};
	_proto.btn_zd_i = function () {
		var t = new eui.Button();
		this.btn_zd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.label = "Button";
		t.skinName = "btnzd";
		t.width = 199;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_pz_i = function () {
		var t = new eui.Button();
		this.btn_pz = t;
		t.height = 108;
		t.label = "Button";
		t.skinName = "btnpz";
		t.width = 200;
		t.x = 200;
		t.y = 1;
		return t;
	};
	_proto.btn_sc_i = function () {
		var t = new eui.Button();
		this.btn_sc = t;
		t.height = 108;
		t.label = "Button";
		t.skinName = "btn";
		t.width = 200;
		t.x = 400;
		t.y = 1;
		return t;
	};
	_proto.btn_gy_i = function () {
		var t = new eui.Button();
		this.btn_gy = t;
		t.height = 108;
		t.label = "Button";
		t.skinName = "btngy";
		t.top = 0;
		t.width = 200;
		t.x = 600;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 216;
		t.width = 200;
		t.x = 400;
		t.y = -216;
		t.elementsContent = [this.lis_button_i()];
		return t;
	};
	_proto.lis_button_i = function () {
		var t = new eui.List();
		this.lis_button = t;
		t.height = 108;
		t.itemRendererSkinName = buttonlist;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cha_i = function () {
		var t = new eui.Button();
		this.cha = t;
		t.bottom = 0;
		t.height = 54;
		t.label = "Button";
		t.left = 0;
		t.skinName = "CHA";
		t.width = 54;
		return t;
	};
	return homeSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ReconnectUI.exml'] = window.ReconnectUISkin = (function (_super) {
	__extends(ReconnectUISkin, _super);
	var ReconnectUISkin$Skin8 = 	(function (_super) {
		__extends(ReconnectUISkin$Skin8, _super);
		function ReconnectUISkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = ReconnectUISkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReconnectUISkin$Skin8;
	})(eui.Skin);

	function ReconnectUISkin() {
		_super.call(this);
		this.skinParts = ["btn_return","lab_note"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.btn_return_i(),this._Label1_i(),this._Rect1_i(),this.lab_note_i()];
	}
	var _proto = ReconnectUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "零陵界-夜_jpg";
		t.top = 0;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.label = "";
		t.width = 97;
		t.x = 82;
		t.y = 80;
		t.skinName = ReconnectUISkin$Skin8;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 60;
		t.text = "断线重连";
		t.width = 246;
		t.x = 179;
		t.y = 94;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x726767;
		t.height = 114;
		t.width = 1180;
		t.x = 370;
		t.y = 483;
		return t;
	};
	_proto.lab_note_i = function () {
		var t = new eui.Label();
		this.lab_note = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.size = 50;
		t.text = "重连中。。。。。";
		t.width = 620;
		t.x = 746;
		t.y = 514;
		return t;
	};
	return ReconnectUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/RoomItem.exml'] = window.RoomItemSkin = (function (_super) {
	__extends(RoomItemSkin, _super);
	function RoomItemSkin() {
		_super.call(this);
		this.skinParts = ["btn_enter","lab_roomID","lab_state"];
		
		this.height = 129;
		this.width = 800;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = RoomItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.touchThrough = false;
		t.x = 0;
		t.y = 14;
		t.elementsContent = [this.btn_enter_i(),this.lab_roomID_i(),this.lab_state_i(),this._Rect1_i()];
		return t;
	};
	_proto.btn_enter_i = function () {
		var t = new eui.Button();
		this.btn_enter = t;
		t.height = 70;
		t.label = "进入房间";
		t.width = 160;
		t.x = 627;
		t.y = 15.5;
		return t;
	};
	_proto.lab_roomID_i = function () {
		var t = new eui.Label();
		this.lab_roomID = t;
		t.height = 33;
		t.size = 24;
		t.text = "房间ID：";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_state_i = function () {
		var t = new eui.Label();
		this.lab_state = t;
		t.height = 33;
		t.size = 24;
		t.text = "房间状态：";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 53.5;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x545454;
		t.height = 1;
		t.width = 800;
		t.x = 0;
		t.y = 101;
		return t;
	};
	return RoomItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RoomListUI.exml'] = window.RoomListUISkin = (function (_super) {
	__extends(RoomListUISkin, _super);
	var RoomListUISkin$Skin9 = 	(function (_super) {
		__extends(RoomListUISkin$Skin9, _super);
		function RoomListUISkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = RoomListUISkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomListUISkin$Skin9;
	})(eui.Skin);

	function RoomListUISkin() {
		_super.call(this);
		this.skinParts = ["btn_return","lab_title","lab_getInfo","lab_userID","img_header","data_roomList"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Scroller1_i()];
	}
	var _proto = RoomListUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.left = 0;
		t.source = "灵山神墟_jpg";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 6.41;
		t.anchorOffsetY = -12;
		t.height = 200;
		t.width = 1704;
		t.x = 169.41;
		t.y = 62;
		t.elementsContent = [this.btn_return_i(),this.lab_title_i(),this.lab_getInfo_i(),this._Rect1_i(),this.lab_userID_i(),this.img_header_i()];
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.label = "";
		t.width = 115;
		t.x = 51;
		t.y = 39;
		t.skinName = RoomListUISkin$Skin9;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.size = 90;
		t.text = "房间列表";
		t.width = 436;
		t.x = 166;
		t.y = 53;
		return t;
	};
	_proto.lab_getInfo_i = function () {
		var t = new eui.Label();
		this.lab_getInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.size = 45;
		t.text = "正在获取房间。。。";
		t.width = 424;
		t.x = 602;
		t.y = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 164;
		t.strokeColor = 0x0065ff;
		t.strokeWeight = 3;
		t.width = 164;
		t.x = 1103;
		t.y = 18;
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.size = 60;
		t.text = "用户ID：";
		t.width = 432;
		t.x = 1267;
		t.y = 75;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.height = 164;
		t.width = 164;
		t.x = 1103;
		t.y = 18;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 686;
		t.width = 1492;
		t.x = 260;
		t.y = 308;
		t.viewport = this.data_roomList_i();
		return t;
	};
	_proto.data_roomList_i = function () {
		var t = new eui.List();
		this.data_roomList = t;
		return t;
	};
	return RoomListUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/reset.exml'] = window.reset = (function (_super) {
	__extends(reset, _super);
	function reset() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 72;
		this.width = 194;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = reset.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "reset_png";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	return reset;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/quanxuan.exml'] = window.quanxuan = (function (_super) {
	__extends(quanxuan, _super);
	function quanxuan() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 72;
		this.width = 194;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = quanxuan.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "quanxuan_png";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	return quanxuan;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/gouma.exml'] = window.gouma = (function (_super) {
	__extends(gouma, _super);
	function gouma() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 72;
		this.width = 194;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
		];
	}
	var _proto = gouma.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.left = 0;
		t.source = "gouma_png";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	return gouma;
})(eui.Skin);generateEUI.paths['resource/skins/shopsene.exml'] = window.shopseneSkin = (function (_super) {
	__extends(shopseneSkin, _super);
	function shopseneSkin() {
		_super.call(this);
		this.skinParts = ["tc2","lis_shop","scr_shop","shop_res","shop_quanxuan","shop_gouma","shop_money","shop_need"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.tc2_i(),this._Group1_i(),this._Image3_i(),this.shop_res_i(),this.shop_quanxuan_i(),this.shop_gouma_i(),this._Image4_i(),this._Image5_i(),this.shop_money_i(),this.shop_need_i()];
	}
	var _proto = shopseneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "back_shop_jpg";
		t.top = 0;
		return t;
	};
	_proto.tc2_i = function () {
		var t = new eui.Button();
		this.tc2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "Button";
		t.right = 0;
		t.skinName = "tc2";
		t.top = 0;
		t.width = 50;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 910;
		t.width = 1472;
		t.x = 376;
		t.y = 110;
		t.elementsContent = [this._Image2_i(),this.scr_shop_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 66;
		t.source = "shop_title_png";
		t.y = 51;
		return t;
	};
	_proto.scr_shop_i = function () {
		var t = new eui.Scroller();
		this.scr_shop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 466;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 1410;
		t.x = 42;
		t.y = 402;
		t.viewport = this.lis_shop_i();
		return t;
	};
	_proto.lis_shop_i = function () {
		var t = new eui.List();
		this.lis_shop = t;
		t.itemRendererSkinName = gouma;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.4;
		t.source = "shop_left_back_png";
		t.x = 91.5;
		t.y = 254;
		return t;
	};
	_proto.shop_res_i = function () {
		var t = new eui.Button();
		this.shop_res = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.label = "Button";
		t.skinName = "reset";
		t.visible = false;
		t.width = 194;
		t.x = 115;
		t.y = 743;
		return t;
	};
	_proto.shop_quanxuan_i = function () {
		var t = new eui.Button();
		this.shop_quanxuan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.label = "Button";
		t.skinName = "quanxuan";
		t.visible = false;
		t.width = 194;
		t.x = 115;
		t.y = 643;
		return t;
	};
	_proto.shop_gouma_i = function () {
		var t = new eui.Button();
		this.shop_gouma = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.label = "Button";
		t.skinName = "gouma";
		t.width = 194;
		t.x = 115;
		t.y = 843;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.source = "chiyou_png";
		t.x = 115;
		t.y = 286;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.source = "xiaohao_png";
		t.visible = false;
		t.x = 115;
		t.y = 417.5;
		return t;
	};
	_proto.shop_money_i = function () {
		var t = new eui.Label();
		this.shop_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.text = "Label";
		t.width = 169.33;
		t.x = 127;
		t.y = 334;
		return t;
	};
	_proto.shop_need_i = function () {
		var t = new eui.Label();
		this.shop_need = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.67;
		t.text = "Label";
		t.visible = false;
		t.width = 171.33;
		t.x = 125;
		t.y = 466;
		return t;
	};
	return shopseneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/buttonlist.exml'] = window.buttonlist = (function (_super) {
	__extends(buttonlist, _super);
	function buttonlist() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 108;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = buttonlist.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "未标题-1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PMingLiU";
		t.height = 62;
		t.size = 50;
		t.textColor = 0x000000;
		t.width = 185;
		t.x = 39;
		t.y = 34;
		return t;
	};
	return buttonlist;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/hero_show.exml'] = window.hero_show = (function (_super) {
	__extends(hero_show, _super);
	function hero_show() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 394;
		this.width = 367;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.num"],[0],this._Label2,"text");
	}
	var _proto = hero_show.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 339;
		t.width = 365;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "拥有数量：";
		t.width = 176;
		t.x = 21;
		t.y = 350;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.x = 183.5;
		t.y = 350;
		return t;
	};
	return hero_show;
})(eui.Skin);generateEUI.paths['resource/skins/skin_items/herolist.exml'] = window.herolist = (function (_super) {
	__extends(herolist, _super);
	function herolist() {
		_super.call(this);
		this.skinParts = ["hero_sel"];
		
		this.height = 450;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.hero_sel_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = herolist.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.left = 0;
		t.source = "cardback_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 339;
		t.width = 365;
		t.x = 19;
		t.y = 11;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.width = 343;
		t.x = 31;
		t.y = 362;
		return t;
	};
	_proto.hero_sel_i = function () {
		var t = new eui.CheckBox();
		this.hero_sel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.label = "已选";
		t.skinName = "skins.CheckBox";
		t.width = 126;
		t.x = 200;
		t.y = 362;
		return t;
	};
	return herolist;
})(eui.Skin);