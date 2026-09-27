// FTO editor for the public GitHub Pages view.
let ftoIndex=null,ftoForm=['','',''];
const baseContent=content,baseModalHtml=modalHtml,baseRender=render;
content=function(){
 if(view!=='fto')return baseContent();
 const ranks=[...new Set(fto.map(r=>r[2]))];
 return panel('FTO','Police Academy — Field Training Officers',table(['BN','Character Name','FTO Rank',...(token?['الإجراءات']:[])],ranks.map(rank=>`<tr class="fto-group"><td colspan="${token?4:3}">${E(rank)}</td></tr>`+fto.map((r,i)=>r[2]===rank?`<tr><td class="gold">${E(r[0])}</td><td><b>${E(r[1])}</b></td><td>${E(r[2])}</td>${token?`<td><button data-edit-fto="${i}">تعديل</button> <button data-delete-fto="${i}">حذف</button></td>`:''}</tr>`:'').join('')).join('')));
};
modalHtml=function(){
 if(modal!=='ftoedit')return baseModalHtml();
 return `<div class="overlay"><div class="modal"><button class="close" id="close">×</button><h2>${ftoIndex===null?'إضافة عضو لـ FTO':'تعديل عضو FTO'}</h2><div class="grid">${['BN','Character Name','FTO Rank'].map((label,i)=>`<label>${label}<input id="fto-field-${i}" value="${E(ftoForm[i])}"></label>`).join('')}</div>${authError?`<p class="editor-error">${E(authError)}</p>`:''}<button class="primary save" id="save-fto" ${saving?'disabled':''}>${saving?'جارٍ الحفظ':'حفظ البيانات'}</button></div></div>`;
};
function openFTO(index=null){ftoIndex=index;ftoForm=index===null?['','','']:[...fto[index]];modal='ftoedit';authError='';render()}
async function saveFTO(next){saving=true;authError='';render();try{const data=await sharedGet('/api/shared-data',{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify({revision,officers,iaMembers,ftoMembers:next})});revision=data.revision;fto.splice(0,fto.length,...next);modal='';alert('تم حفظ التعديل')}catch(e){authError=e.message}finally{saving=false;render()}}
function submitFTO(){const row=[0,1,2].map(i=>document.getElementById('fto-field-'+i)?.value.trim()||'');if(row.some(v=>!v)){authError='كل الحقول مطلوبة';render();return}const next=fto.map(r=>[...r]);if(ftoIndex===null)next.push(row);else next[ftoIndex]=row;saveFTO(next)}
function removeFTO(index){if(confirm('حذف هذا العضو من FTO؟'))saveFTO(fto.filter((_,i)=>i!==index))}
render=function(){baseRender();if(token&&view==='fto'){const button=document.createElement('button');button.className='primary';button.textContent='إضافة لـ FTO';button.onclick=()=>openFTO();document.querySelector('header').appendChild(button)}document.querySelectorAll('[data-edit-fto]').forEach(b=>b.onclick=()=>openFTO(Number(b.dataset.editFto)));document.querySelectorAll('[data-delete-fto]').forEach(b=>b.onclick=()=>removeFTO(Number(b.dataset.deleteFto)));document.getElementById('save-fto')?.addEventListener('click',submitFTO)};
sharedGet('/api/shared-data').then(data=>{if(Array.isArray(data.ftoMembers)){fto.splice(0,fto.length,...data.ftoMembers);render()}}).catch(console.error);
render();
