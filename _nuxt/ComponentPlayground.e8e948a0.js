import{J as s,u as i,b as p,a as c,a2 as u,B as l,Q as e,m as d}from"./entry.5dab74c7.js";import{u as f}from"./asyncData.92205853.js";import y from"./Ellipsis.84a9ba8c.js";import g from"./ComponentPlaygroundData.2bbae184.js";/* empty css                                *//* empty css                     */import"./TabsHeader.523c3cf5.js";/* empty css                       */import"./ComponentPlaygroundProps.f8f3a374.js";import"./ProseH4.cd34805b.js";/* empty css                    */import"./ProseCodeInline.9d45d820.js";/* empty css                            */import"./Badge.d8105d8f.js";import"./ContentSlot.e7ea8b31.js";/* empty css                  */import"./ProseP.2990d572.js";/* empty css                   */import"./index.efbffdfb.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.fc14be34.js";import"./ComponentPlaygroundTokens.vue.85b26bf0.js";/* empty css                                    */async function h(o){s();const t=i(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,m])=>{if(r.startsWith("component-")){const a=r.replace("component-","");n[a]=m}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),x=d(_,[["__scopeId","data-v-ffdff82a"]]);export{x as default};
