const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/web-C2sU1Y7Z.js","assets/index-DI_G0BoI.js","assets/index-Bd5_-tB0.css"])))=>i.map(i=>d[i]);
var T=Object.defineProperty;var R=(c,t,s)=>t in c?T(c,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[t]=s;var n=(c,t,s)=>R(c,typeof t!="symbol"?t+"":t,s);import{K as F,L as U,N as D,O as N,P as w,R as y,S as C,T as W,n as v,U as L,V as _,X as j,Y as A,z as E,Z as M,E as H,l as x,F as K,I as Y,$ as q}from"./index-DI_G0BoI.js";const p=F("LiveUpdate",{web:()=>U(()=>import("./web-C2sU1Y7Z.js"),__vite__mapDeps([0,1,2])).then(c=>new c.LiveUpdateWeb)});class z{async run(t){const s=(await D.get(`${t}?ts=${Date.now()}`)).data;if(console.log(s),N.getPlatform()=="web"){this.curId=s.bundleId;return}const e=await p.ready();if(console.log(e),this.curId=e.currentBundleId,s.bundleId!=this.curId){try{await p.downloadBundle(s)}catch(i){console.log("downloadBundle",i)}try{await p.deleteBundle({bundleId:this.curId})}catch(i){console.log("deleteBundle",i)}await p.setNextBundle({bundleId:s.bundleId}),await p.reload()}}}const G=w(new z);G.run(y.latestBundle);const h=w(new K);h.init();const J="https://chat.whatsapp.com/BATEjcoWZeZCMmDuNAW7tn",a={info:"Similar Minds",info2:"Use AI to find your kindred spirits",info3:`Chat with our AI (Serena) who tries to understand you 
 and recommend similar minds to you`,editMsg:"Share your deeper thoughts",sysInfo:`You are an AI called Serena who tries to understand user's mind.
    Lead the conversation. Keep replies short. Use user's language.`,newChat:"New Topic",kindred:"Similar Minds For Current Topic",matches:"People with similar minds",noMatch:`No matches found yet, 
  share this App with your friends to help us grow the community!
  Or try adjusting the filters!`,editName:"Edit your name",update:"Update",updateBio:"Update Profile",delAccount:"Delete Account",signOut:"Sign Out",setPhoto:"Please set a profile photo",setSex:"Please pick a gender",setName:"Please enter a name",setBio:"Please introduce yourself first",delete:"Delete",copy:"Copy",edit:"Edit",reGen:"Regenerate",report:"Report",reportInfo:"Describe the issue with this content",filter:"Apply Filters",minSim:"Min Similarity",sim:"Similarity",viewFull:"Full Chat",view:"View",block:"Block",unblock:"Unblock",contacts:"Contacts",blocked:"Blocked Contacts",back:"Back",cancel:"Cancel",confirm:"Confirm",delConfirm:"Confirm permanent, unrecoverable deletion?",blockConfirm:"Confirm blocking this user?",summary:"Summary",lowQuality:"Your chat with Serena isn't quite up to our quality standards yet, so it will be hidden from other users for now.",discover:"Discover",helpReply:"Suggest Reply",polishMsg:"Polish My Message",actMap:{U:"(edited)",D:"(deleted)"},usages:["Love","Friends","Project Partners"],hello:"We have similar minds, let's connect!"},et=`
### ${a.info} ([App](/))

- **${a.info2}: ${a.usages.join(", ")}...**
- Other names: \`Resonance\`, \`Serena\`
- [Privacy & Child Safety Policies, Terms of Service](/md/policies)
- Feedback: [WhatsApp](${J}), 
  [GitHub Issues](https://github.com/When-Light-Arrives/app/issues)
- Sole developer: [Ricky Ding](https://tesla-cat.github.io)
- [**The Pitch**](/md/pitch)
`,V=`
  <a href="https://play.google.com/store/apps/details?id=com.when_light_arrives.app">
    <img src="/ui/imgs/android.svg" />
  <a/>
`,Z=`
<div class="row ctr g10">
  ${q?"":V}
  <a href="https://apps.apple.com/app/when-light-arrives/id6747026234">
    <img src="/ui/imgs/ios.svg" />
  </a>
</div>
`,at=[{md:`
### Step 1: Download the App

${Z}

<b class="row ctr m5">Tap on the images to enlarge them</b>

<img class="img1" src="/ui/imgs/SM/app1a.webp"/>
    `},{md:`
### Step 2: Talk with Serena (AI)

Explore and summarize your ideas

<div class="row">
  <img class="img1" src="/ui/imgs/SM/app2a.webp"/>
  <img class="img1" src="/ui/imgs/SM/app2b.webp"/>
</div>
    `},{md:`
### Step 3: See Your Matches

Filter for the most similar minds,
read their full chats with Serena

<div class="row">
  <img class="img1" src="/ui/imgs/SM/app3a.webp"/>
  <img class="img1" src="/ui/imgs/SM/app3b.webp"/>
</div>
    `},{md:`
### Step 4: Chat with Kindred Spirits

Shy? Serena guides you to chat 
and polishes your messages

<img class="img1" src="/ui/imgs/SM/app4a.webp"/>
    `}],g="/ui/icons/cat.jpg";function u(c){M(a.delConfirm,a.confirm,c)}class Q{constructor(){n(this,"host",y.host);n(this,"wsHost",y.wsHost);n(this,"reply",{});n(this,"msg",{body:""});n(this,"msgs",[]);n(this,"chatID");n(this,"chats",[]);n(this,"showSummary",!1);n(this,"msg2",{body:""});n(this,"chats2",{});n(this,"showChats2",!1);n(this,"bio",{name:"",photo:g,sex:void 0,uid:null});n(this,"filters",{sex:void 0,minSim:"30%"})}async _callAI(t,s){C.value=!0,typeof t=="string"&&(t=[{role:"user",content:t}]);const e=this.host+"call_ai";try{const o=(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({msgs:t})})).body.getReader();let d="";const m=new TextDecoder;for(;;){const{done:l,value:f}=await o.read();if(l)break;d+=m.decode(f),s(d)}}catch(i){console.log(i)}C.value=!1}async callAI(t){this.reply={role:"assistant",content:""},this.msgs.push(this.reply),await this._callAI(t,s=>this.reply.content=s)}async post(t,s){return h.user||await h.signIn(),(await D.post(this.host+t,s,{headers:{Authorization:`Bearer ${h.user.token}`}})).data}async upload(t){if(!W(t))return t;const s=new FormData;return s.append("file",t),await this.post("upload",s)}async send(){const{msgs:t,msg:s}=this;if(s.body=s.body.trim(),!s.body)return;h.user||await h.signIn(),s.idx!=null&&t.splice(s.idx),t.push({role:"user",content:s.body}),this.msg={body:""};const e={role:"system",content:a.sysInfo};await this.callAI([e,...t]),await this._cudChat()}async _cudChat(){const{msgs:t,chatID:s}=this,e=await this.post("cud_chat",{id:s,msgs:t});this.chatID=e.id,await this._cudChat2()}async _cudChat2(){const t=await this.post("cud_chat_2",{id:this.chatID});this.summary=t.data.summary}async regenerate(t){const{msgs:s}=this;s.splice(t);const e={role:"system",content:a.sysInfo};await this.callAI([e,...s]),await this._cudChat()}getMsgsWithMenu(){return this.msgs.map((t,s)=>{const e=[{text:a.copy,click:()=>v(t.content)}];return t.role=="user"?e.push({text:a.edit,click:()=>this.msg={body:t.content,idx:s}}):(e.push({text:a.reGen,click:()=>this.regenerate(s)}),e.push({text:a.report,click:()=>this.showReport("chats",this.chatID,t)})),{...t,menu:e}})}showReport(t,s,e){L(a.reportInfo,i=>{this.post("cud_report",{data:{table:t,id:s,item:e,msg:i}})})}async readChats(){this.chats=await this.post("read_chats"),this.showChats=!0}async delChat(t){u(async()=>{await this.post("cud_chat",{id:t.id,delete:!0}),this.chats=this.chats.filter(s=>s.id!=t.id)})}async delMatch(t){u(async()=>{await this.post("cud_chat",{id:t.chat.id,delete:!0}),this.matches=this.matches.filter(s=>s.chat.id!=t.chat.id)})}setChat(t){var s,e;t&&(this.chatID=t.id,this.msgs=((s=t.data)==null?void 0:s.msgs)||[],this.summary=(e=t.data)==null?void 0:e.summary),this.showChats=!1}editBio(){this.showBio=!0}async updateBio(){const{bio:t}=this;let s;t.photo==g?s=a.setPhoto:t.sex?t.name||(s=a.setName):s=a.setSex,s?_.create(s):(t.photo=await this.upload(t.photo),this.bio=await this.post("cud_user",{data:t}),this.showBio=!1)}async delUser(){u(async()=>{await this.post("del_user"),await h.signOut()})}async readBio(){const t=await this.post("read_user");t&&(this.bio=t)}bioOK(){const t=this.bio;return t.photo!=g&&t.sex&&t.name}async search(){if(!this.chatID)return;if(!this.bioOK()){_.create(a.setBio),this.editBio();return}let{sex:t,minSim:s}=this.filters;s=j(s);const e=await this.post("search",{id:this.chatID,sex:t,minSim:s});this.matches=e,A.push("/match")}async load(){const t=await this.post("user_data",{});t&&Object.assign(this,t.data)}async save(){const{chats2:t}=this,s={chats2:t};await this.post("user_data",{data:s})}async connectWS(){const t=this.chats2;this.ws=new WebSocket(this.wsHost+`ws_chat?token=${h.user.token}`),this.ws.onmessage=async s=>{const{from:e,msg:i}=JSON.parse(s.data),{uid:o}=e;t[o]||(t[o]={msgs:[]}),t[o].from=e,await this.cudMsg2(o,i)}}async cudMsg2(t,s){const{msgs:e}=this.chats2[t];if(s.act){const i=e.find(o=>o.uid==s.uid&&o.ts==s.ts);Object.assign(i,s)}else e.push(s);await this.save()}async wsSend(t){const{msg2:s,bio:e,ws:i}=this;if(s.body=s.body.trim(),!s.body)return;e.uid||await this.readBio();const o={ts:Date.now(),uid:e.uid,...s},d={from:e,to:t,msg:o};i.send(JSON.stringify(d)),await this.cudMsg2(t,o),this.msg2={body:""}}async startChat(t){const s=t.user.uid,e=this.getChat2(t.user),i={score:t.score,u1:this.bio,c1:{id:this.chatID,summary:this.summary},u2:t.user,c2:{id:t.chat.id,summary:t.chat.data.summary}},o=e.msgs.length?"":a.hello;this.msg2={body:o,matchInfo:i},A.push(`/chat?uid=${s}`)}matchInfo2Dic(t){const s=t.matchInfo;if(s)return{[a.sim]:E(s.score),[s.u1.name]:s.c1.summary,[s.u2.name]:s.c2.summary}}getChat2(t){const{chats2:s}=this,{uid:e}=t;s[e]||(s[e]={msgs:[]});const i=s[e];return i.from=t,i}getChat2Menu(t){const s=async()=>{u(async()=>{delete this.chats2[t.from.uid],await this.save()})},e=async()=>{t.block=!t.block,await this.save()};return[{text:a.delete,click:s},{text:t.block?a.unblock:a.block,click:e}]}blockUser(t){M(a.blockConfirm,a.confirm,async()=>{const s=this.getChat2(t);s.block=!s.block,await this.save()})}getMsgs2WithMenu(t){return this.chats2[t].msgs.map(s=>{const e=[{text:a.copy,click:()=>v(s.body)}];if(s.uid==this.bio.uid){const i=async()=>{u(async()=>{this.msg2={...s,act:"D"},await this.wsSend(t)})};e.push({text:a.edit,click:()=>this.msg2={...s,act:"U"}}),e.push({text:a.delete,click:i})}return{...s,menu:e}})}async emptyChat2(t){u(async()=>{t.msgs=[],await this.save()})}async helpReply(t,s=!1){const{bio:e,chats2:i,msg2:o}=this,d=i[t],m={[t]:d.from,[e.uid]:e},l=[];[...d.msgs,o].forEach(r=>{if(r.matchInfo){const{u1:I,u2:k,c1:B,c2:O}=r.matchInfo;l.push(`${I.name} (${I.sex}): ${B.summary}`),l.push(`${k.name} (${k.sex}): ${O.summary}`)}if(r.act=="D")return;const S=r.uid?m[r.uid]:e,$=r.uid?H(r.ts):"DRAFT";l.push(`${$} ${S.name} (${S.sex}): ${r.body}`)});const P=s?"polish the DRAFT (don't change meaning)":"write the next message (refer to DRAFT content if any)";l.push(`Help ${e.name} ${P}, in their language, return the message content directly! keep it short, avoid repetition`);const b=x.uniq(l).join(`

`);console.log(b),await this._callAI(b,r=>o.body=r)}async onAuth(){h.user&&(await this.load(),await this.readChats(),this.setChat(x.last(this.chats)),await this.readBio(),await this.connectWS())}}const X=w(new Q);Y(()=>h.user,()=>X.onAuth());export{J as W,X as a,Z as b,at as c,h as f,et as i,G as l,a as t};
