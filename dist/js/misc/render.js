lsKeys.render="render",page.renderType="miku",page.renderConfig={al:{name:"ship waifu~",root:"render/al/",array:["admiral_graf_spee_1.png","admiral_hipper_1.png","akagi_1.png","akashi_1.png","akashi_2.png","atago_1.png","atago_3.png","atago_4.png","atago_5.png","belfast_2.png","choukai_1.png","deutschland_1.png","enterprise_1.png","glorious_1.png","hammann_1.png","hammann_2.png","hammann_3.png","hatsuharu_1.png","kaga_1.png","kaga_2.png","kaga_3.png","laffey_1.png","laffey_2.png","laffey_3.png","prinz_eugen_3.png","san_diego_1.png","takao_3.png","unicorn_1.png","unicorn_2.png","unicorn_3.png","unicorn_4.png","unicorn_6.png","unicorn_7.png","unicorn_8.png","yamashiro_1.png","yamashiro_2.png","yamashiro_3.png","yukikaze_1.png"]},miku:{name:"miku ❤️~",root:"render/miku/",array:[]}};for(var i=1;i<=50;i++)page.renderConfig.miku.array.push(("00"+i).slice(-3)+".png");page.config=null,page.render=null,page.doRenderSwal=function(){var e=document.createElement("div");e.innerHTML='\n    <div class="field">\n      <div class="control">\n        <label class="checkbox">\n          <input id="swalRender" type="checkbox" '+("0"===localStorage[lsKeys.render]?"":"checked")+">\n          Enable random render of "+page.config.name+'\n        </label>\n      </div>\n      <p class="help">If disabled, you will still be able to see a small button on the bottom right corner of the screen to re-enable it.</p>\n    </div>\n  ',swal({content:e,buttons:{confirm:!0}}).then((function(n){if(n){var a=e.querySelector("#swalRender").checked?void 0:"0";if(a!==localStorage[lsKeys.render])a?localStorage[lsKeys.render]=a:localStorage.removeItem(lsKeys.render),swal("","Random render is now "+(a?"disabled":"enabled")+".","success",{buttons:!1,timer:1500}),document.querySelector("body > .render").remove(),page.doRender()}}))},page.getRenderVersion=function(){var e=document.querySelector("#renderScript");return e&&e.dataset.version?"?v="+e.dataset.version:""},page.doRender=function(){var e;(page.config=page.renderConfig[page.renderType],page.config&&page.config.array.length)&&("0"===localStorage[lsKeys.render]?((e=document.createElement("a")).className="button is-info is-hidden-mobile",e.title=page.config.name,e.innerHTML='<i class="icon-picture"></i>'):(page.render=page.config.array[Math.floor(Math.random()*page.config.array.length)],(e=document.createElement("img")).alt=e.title=page.config.name,e.className="is-hidden-mobile",e.src=""+page.config.root+page.render+page.getRenderVersion()),e.classList.add("render"),e.addEventListener("click",page.doRenderSwal),document.body.appendChild(e))};
//# sourceMappingURL=render.js.map