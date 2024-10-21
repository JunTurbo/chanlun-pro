"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[2183],{36036:(e,t,i)=>{i.d(t,{LineAnchorRenderer:()=>v,anchor:()=>_});var n=i(14314),r=i(86441),s=i(34026),o=i(50151),a=i(37743),l=i(37265),d=i(56468),u=i(72791),c=i(61993),h=i(30125);class p extends r.Point{constructor(e){super(e.x,e.y),(0,n.default)(this,this,e)}}function _(e){return new p(e)}function g(e,t,i,n){const r=i+n/2;(0,a.drawRoundRect)(e,t.x-r,t.y-r,2*r,2*r,(i+n)/2),e.closePath(),e.lineWidth=n}function P(e,t,i,n){e.globalAlpha=.2,g(e,t,i,n),e.stroke(),e.globalAlpha=1}function y(e,t,i,n){g(e,t,i-n,n),e.fill(),e.stroke()}function f(e,t,i,n){e.globalAlpha=.2,e.beginPath(),e.arc(t.x,t.y,i+n/2,0,2*Math.PI,!0),e.closePath(),e.lineWidth=n,e.stroke(),e.globalAlpha=1}function m(e,t,i,n){e.beginPath(),e.arc(t.x,t.y,i-n/2,0,2*Math.PI,!0),e.closePath(),e.lineWidth=n,e.fill(),e.stroke()}class v extends h.BitmapCoordinatesPaneRenderer{constructor(e){super(),this._data=null!=e?e:null}setData(e){this._data=e}hitTest(e){var t,i;if(null===this._data||this._data.disableInteractions)return null;const{radius:n,points:r}=this._data,s=(0,c.interactionTolerance)().anchor;for(let o=0;o<r.length;++o){const a=r[o];if(a.subtract(e).length()<=n+s)return new d.HitTestResult(null!==(t=a.hitTarget)&&void 0!==t?t:d.HitTarget.ChangePoint,{pointIndex:a.pointIndex,cursorType:null!==(i=a.cursorType)&&void 0!==i?i:u.PaneCursorType.Default,activeItem:a.activeItem,snappingPrice:a.snappingPrice,snappingIndex:a.snappingIndex,nonDiscreteIndex:a.nonDiscreteIndex,areaName:d.AreaName.AnchorPoint,possibleMovingDirections:a.possibleMovingDirections})}return null}doesIntersectWithBox(e){return null!==this._data&&this._data.points.some((t=>(0,s.pointInBox)(t,e)))}_drawImpl(e){if(null===this._data||!this._data.visible)return;const t=[],i=[],n=[],r=[];for(let e=0;e<this._data.points.length;++e){const s=this._data.points[e],o=this._data.backgroundColors[e];s.square?(t.push(s),i.push(o)):(n.push(s),r.push(o))}t.length&&this._drawPoints(e,t,i,y,P),n.length&&this._drawPoints(e,n,r,m,f)}_drawPoints(e,t,i,n,r){const{context:s,horizontalPixelRatio:a,verticalPixelRatio:d}=e,u=(0,o.ensureNotNull)(this._data),h=u.radius;let p=Math.max(1,Math.floor((u.strokeWidth||2)*a));u.selected&&(p+=Math.max(1,Math.floor(a/2)));const g=Math.max(1,Math.floor(a));let P=Math.round(h*a*2);P%2!=g%2&&(P+=1);const y=g%2/2,f=(0,c.interactionTolerance)().anchor;s.strokeStyle=u.color;for(let e=0;e<t.length;++e){const o=t[e];s.fillStyle=i[e];if(!((0,l.isInteger)(o.pointIndex)&&u.linePointBeingEdited===o.pointIndex)){if(n(s,_({...o,x:Math.round(o.x*a)+y,y:Math.round(o.y*d)+y}),P/2,p),!u.disableInteractions){if(o.subtract(u.currentPoint).length()<=h+f){const e=Math.max(1,Math.floor(u.selectedStrokeWidth*a));let t=Math.round(h*a*2);t%2!=g%2&&(t+=1);r(s,_({...o,x:Math.round(o.x*a)+y,y:Math.round(o.y*d)+y}),t/2,e)}}}}}}},63006:(e,t,i)=>{i.r(t),i.d(t,{StudyInputPriceAxisPaneView:()=>s});var n=i(57596),r=i(98558);class s extends r.PriceAxisView{constructor(e,t){super(),this._input=e,
this._getInputValue=t.getInputValue,this._convertPriceToCoordinate=t.convertPriceToCoordinate,this._formatPrice=t.formatPrice}_updateRendererData(e,t,i){e.visible=!1;const r=this._getInputValue(this._input.id);if(null===r)return;const s=this._convertPriceToCoordinate(r);if(null===s)return;const o=n.axisLabelBackgroundColor.common;i.background=o,i.textColor=this.generateTextColor(o),i.coordinate=s,e.text=this._formatPrice(r),e.visible=!0}}},35581:(e,t,i)=>{i.r(t),i.d(t,{StudyInputTimeAxisPaneView:()=>s});var n=i(57596),r=i(66156);class s extends r.TimeAxisView{constructor(e,t,i){super(t),this._input=e,this._getInputValue=i}_getBgColor(){return n.axisLabelBackgroundColor.common}_getIndex(){const e=this._getInputValue(this._input.id);return null===e?null:this._model.timeScale().timePointToIndex(e/1e3)}_isVisible(){return!0}}},99549:(e,t,i)=>{i.r(t),i.d(t,{StudyInputsAnchorsPaneView:()=>h});var n=i(86441),r=i(19625),s=i(69186),o=i(56468),a=i(72791),l=i(36036),d=i(50546);const u=r.colorsPalette["color-cold-gray-500"],c=r.colorsPalette["color-tv-blue-600"];class h extends d.StudyInputsPaneView{constructor(e,t,i){super(e,t,i),this._editable=!0,this._points=[],this._studyAnchorRenderers=[],this._isSelected=i.isSelected?i.isSelected:()=>!0,this._isHovered=i.isHovered?i.isHovered:()=>!0}setEditable(e){this._editable=e}getEditable(){return this._editable}_fillCompositeRendrer(e,t){this._fillInformationAboutPointsAndCursors(e,t),this._renderer.append(this._createStudyAnchor({points:this._points},e,0))}_fillInformationAboutPointsAndCursors(e,t){if(this._points=[],this._inputs.find((e=>Array.isArray(e)||"price"===e.type))){if(null===this._convertPriceToCoordinate(0))return}this._inputs.forEach(((i,r)=>{let s=a.PaneCursorType.Default,d=null,u=null,c=!0;const h=i;if(Array.isArray(i)){const e="time"===i[0].type?i[0]:i[1],t="price"===i[0].type?i[0]:i[1],n=this._getInputValue(e.id),r=this._getInputValue(t.id);null!==n&&null!==r&&(d=this._convertTimeToCoordinate(n),u=this._convertPriceToCoordinate(r),c=!1)}else{const n=this._getInputValue(i.id);null!==n&&("time"===i.type?(d=this._convertTimeToCoordinate(n),u=e/2,s=a.PaneCursorType.HorizontalResize):(d=t/2,u=this._convertPriceToCoordinate(n),s=a.PaneCursorType.VerticalResize))}if(null!==d&&null!==u){const e=new n.Point(d,u);e.activeItem=h,e.square=c,e.pointIndex=r,e.hitTarget=o.HitTarget.MovePoint,e.cursorType=s,this._points.push((0,l.anchor)({x:d,y:u,activeItem:h,square:c,pointIndex:r,hitTarget:o.HitTarget.MovePoint,cursorType:s,possibleMovingDirections:(p=Array.isArray(i)?i[0].type:i.type,"price"===p?2:1)}))}var p}))}_createStudyAnchor(e,t,i){const n=(0,s.lastMouseOrTouchEventInfo)().isTouch,r=this._getStudyAnchorRenderer(i),o=this._inputs.indexOf(this._model.activeItemBeingMoved()),a=this._model.crossHairSource(),l=(this._isHovered()||this._isSelected())&&!this._model.isSnapshot(),d={...e,color:this._editable?c:u,backgroundColors:this._studyAnchorColors(e.points,t),currentPoint:a.currentPoint(),linePointBeingEdited:-1!==o?o:null,radius:n?13:6,strokeWidth:n?2:1,
selected:this._isSelected(),selectedStrokeWidth:n?0:3,visible:l};return this._editable||(d.disableInteractions=!0),r.setData(d),r}_studyAnchorColors(e,t){return e.map((e=>this._model.backgroundColorAtYPercentFromTop(e.y/t)))}_getStudyAnchorRenderer(e){for(;this._studyAnchorRenderers.length<=e;)this._studyAnchorRenderers.push(new l.LineAnchorRenderer);return this._studyAnchorRenderers[e]}}},98255:(e,t,i)=>{i.r(t),i.d(t,{StudyInputsLinesPaneView:()=>c});var n=i(19625),r=i(51056),s=i(56468),o=i(72791),a=i(50600),l=i(95173),d=i(50546);const u={color:n.colorsPalette["color-cold-gray-500"],linewidth:1,linestyle:r.LINESTYLE_SOLID};class c extends d.StudyInputsPaneView{constructor(){super(...arguments),this._editable=!0}setEditable(e){this._editable=e}getEditable(){return this._editable}_fillCompositeRendrer(e,t){this._inputs.forEach((e=>{if(Array.isArray(e)){const t=e[0],i=e[1],n=this._getInputValue(t.id),r=this._getInputValue(i.id);if(null!==n&&null!==r){const e=this._createLineRendererForinput(n,t),s=this._createLineRendererForinput(r,i);null!==e&&null!==s&&(this._renderer.append(e),this._renderer.append(s))}}else{const t=this._getInputValue(e.id);if(null!==t){const i=this._createLineRendererForinput(t,e);null!==i&&this._renderer.append(i)}}}))}_createLineRendererForinput(e,t){if("price"===t.type){const i=this._convertPriceToCoordinate(e);if(null!==i){const e=new a.HorizontalLineRenderer;e.setData({...u,y:i});const n=this._editable?new s.HitTestResult(s.HitTarget.MovePoint,{cursorType:o.PaneCursorType.VerticalResize,activeItem:t,possibleMovingDirections:2}):null;return e.setHitTest(n),e}}else if("time"===t.type){const i=this._convertTimeToCoordinate(e);if(null!==i){const e=new l.VerticalLineRenderer;e.setData({...u,x:i});const n=this._editable?new s.HitTestResult(s.HitTarget.MovePoint,{cursorType:o.PaneCursorType.HorizontalResize,activeItem:t,possibleMovingDirections:1}):null;return e.setHitTest(n),e}}return null}}},50546:(e,t,i)=>{i.d(t,{StudyInputsPaneView:()=>s});var n=i(50151),r=i(95201);class s{constructor(e,t,i){this._renderer=new r.CompositeRenderer,this._invalidated=!0,this._inputs=e,this._model=t,this._convertPriceToCoordinate=i.convertPriceToCoordinate,this._getInputValue=i.getInputValue}getInputs(){return this._inputs}addInput(e){(0,n.assert)(-1===this._inputs.indexOf(e),"Pane view already contains specified input"),this._inputs.push(e),this.update()}update(e){this._invalidated=!0}renderer(e){return this._invalidated&&(this._updateImpl(e.mediaSize.height,e.mediaSize.width),this._invalidated=!1),this._renderer}_updateImpl(e,t){this._renderer.clear();this._model.timeScale().isEmpty()||0===this._inputs.length||this._fillCompositeRendrer(e,t)}_convertTimeToCoordinate(e){const t=this._model.timeScale(),i=t.timePointToIndex(e/1e3);return null!==i?t.indexToCoordinate(i):null}}}}]);