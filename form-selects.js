// Use fixed choices in the roster editor. Badge, name, username, Discord ID, and points are typed.
const rosterRankChoices=[
 'Minister of Interior','Deputy Minister of Interior','Advisor Minister of Interior',
 'LSPD Chief','LSPD Deputy Chief','High Commanders','General','Colonel','Major',
 'Captain','First Lieutenant','Lieutenant','Staff Sergeant','First Sergeant',
 'Sergeant','Senior Lead Officer','Senior Officer','Officer III','Officer II',
 'Officer I','Solo Cadet','Cadet'
];
const rosterSelectChoices={
 rank:rosterRankChoices,
 insignia:['No insignia'],
 department:['LSPD','LSSD','SASP','SAHP'],
 adminRank:['N/A','Division s & Bureau s Supervisor','Division Office / Supervisor',
  'Commander','Watch Commander','Supervisor','Asst.Supervisor','Police Academy Commander',
  'Police Academy Deputy','Head of Internal Affairs','Deputy Head of Internal Affairs'],
 status:['Active','Vacation','Inactive','N/A'],
 vacation:['N/A','Yes','No','Classified'],
 points:[0,100,250,500,850,1000,1850,2000,2450,3550,4400],
 lastPromotion:['N/A','Classified'],
 userName:[],
 certificates:['N/A','Police Academy','FTO','Internal Affairs','SWAT','Detective','Negotiation','Motorcycle','Airship']
};
const rosterFieldLabels={badge:'رقم البادج',name:'الاسم',discordId:'Discord ID',
 rank:'الرتبة',insignia:'Insignia',department:'القسم',adminRank:'الرتبة الإدارية',
 status:'الحالة',vacation:'الإجازة',points:'النقاط',lastPromotion:'آخر ترقية',
 userName:'اسم المستخدم',certificates:'الشهادات والوحدات'};
const priorRosterModalHtml=modalHtml;
modalHtml=function(){
 if(modal!=='edit')return priorRosterModalHtml();
 const fields=Object.entries(rosterFieldLabels).map(([key,label])=>{
  const selected=String(form[key]??'');
  if(['badge','name','userName','discordId','points'].includes(key))
   return `<label>${label}<input id="field-${key}" value="${selected.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}" ${key==='points'?'type="number" min="0" step="1"':''}></label>`;
  const known=rosterSelectChoices[key]||[];
  // Preserve any saved value from an older record without letting another member's ID appear as a choice.
  const values=[...new Set(['',...known.map(String),...(selected?[selected]:[])])];
  return `<label>${label}<select id="field-${key}">${values.map(value=>
   `<option value="${E(value)}" ${value===selected?'selected':''}>${value?E(value):'— غير محدد —'}</option>`).join('')}</select></label>`;
 }).join('');
 return `<div class="overlay"><div class="modal"><button class="close" id="close">×</button><h2>${editing?'تعديل بيانات العضو':'إضافة عضو'}</h2><div class="grid">${fields}</div>${authError?`<p class="editor-error">${E(authError)}</p>`:''}<button class="primary save" id="save" ${saving?'disabled':''}>${saving?'جارٍ الحفظ':'حفظ البيانات'}</button></div></div>`;
};
