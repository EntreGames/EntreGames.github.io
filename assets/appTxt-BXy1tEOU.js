import{Z as r,bO as o,aM as i}from"./index-BtKHKQ9f.js";const a=e=>{var t;return e.pay||(e.price=(e.tier=="c"?parseInt(e.price):e.tier)||0),{Price:"$"+e.price,"Initial Cash":"$"+i(Math.max(e.price,.1)*1e6),Paid:((t=e.pay)==null?void 0:t.paid)||0}},s="[transaction fee](https://stripe.com/en-sg/pricing)",n={app:{logo:"/ui/icons/EG.webp",name:"EntreGames",info:`
A **Reinforcement Learning-inspired game** where AI helps you practice 
entrepreneurship by simulating the journey of building a company. ([**screenshots**](/info))
1. **Create a Startup**: Pick a name, logo and write an idea description.  
2. **Gather a Team**: Invite friends or let strangers join your startup,
  picking roles like: \`CEO, CTO...\`
3. **Start the Simulation**:
  Based on your idea, AI generates the **initial startup scenario** you face and
  **core metrics**: \`Valuation, MRR, DAU...\`
4. **Make Decisions**: Discuss strategies with your co-founders.
  Take company **actions**.
5. **AI Feedback Loop**: The AI evaluates your decisions and updates 
  the next **scenario** and **metrics**
6. The cycle repeats: new challenges, new metrics, new decisions,
  until your startup becomes a success, fails, or you walk away.
  `},appDemo:{"1_home":`
### [EntreGames](/)
Welcome, future entrepreneur! 🚀
Check out our homepage to see the vision and learn how to play.`,"2_create":`Build your empire! 🏗️
Create public or private *startups* with a logo, name, and description.`,"3_explore":`Discover cool ideas! 🔍
Explore other startups and get inspired by players' creative ventures.`,"4_join":`Join the action! 🤝
Check out startup teams and hop in as CEO, CTO, or other roles.`,"5_play,6_play":`
Ready to play? 🎲
The game is conversation-based — kinda like [Werewolf](https://en.wikipedia.org/wiki/Mafia_(party_game))!
- The AI will send **Startup Scenarios** (black) and track your company's progress.
- You can send **Actions** (blue) to steer your startup, and **Discussions** to rally your team.
- Every choice matters — so strategize and have fun!`,"7_warn":`⚠️ Heads-up!
We treat **actions** and **ideas** differently, so think before you act.`,"8_trend":`📈 Watch your journey!
Track your startup's progress with plots of key metrics.`,"9_comments":`💬 See what others think!
Check the comments to learn how outsiders react to your startup.`},appWarn:"WIP: demo UI, demo data, solo dev",urls:{github:"https://github.com/EntreGames/app",issues:"https://github.com/EntreGames/app/issues",group:"https://chat.whatsapp.com/B9Dxes7NW0hHeryw4gqbBQ?mode=ems_copy_t"},createRoom:"Create A Startup",viewStartups:"Explore Startups",tabs:{home:{t:"Welcome",i:"home"},explore:{t:"Explore",i:"explore"},mine:{t:"Mine",i:"lightbulb"},stars:{t:"Stars",i:"star"}},tabs2:{info:{t:"Info",i:"info"},play:{t:"Play",i:"sports_esports"},trend:{t:"Trend",i:"insights"},comments:{t:"Comments"}},sortItems:o({val:"VAL",mrr:"MRR",dau:"DAU",cash:"Cash",n_stars:"Stars",price:"Price (Init Cash)",id:"Create Time"}),sendTypes:{action:"Send As Action",discussion:"Send As Discussion"},sendTypes2:{comment:"Send As Comment"},sendInfo:`
### Actions vs. Ideas (Discussions)
- Ideas are cool,  
- But only **actions** matter.  
- Our AI only considers your **actions** when predicting scenarios and metrics.  
- **Stay real**: don't make up actions you wouldn't actually take in real life.  
  This is a game for learning entrepreneurship,  
  not for tricking the system to get scores.  
  `,sendPh:"write Action or Discussion",sendPh2:"write Comment",nextScenario:"Predict Next Scenario",ceoOnly:"Only the CEO can do this",roleTaken:"Role already taken!",roleNeeded:"Pick a role first!",clearConfirm:"Confirm **resetting**? (clears all messages, unrecoverable!)",founded:e=>`Founded ${e}`,noRefund:"Non-refundable after 7 days",refunded:e=>`Refunded \`${e}\` after reducing ${s} (may take a few days to reach the bank)`,fairness:"\n- `cash` represents `health level`\n- Players can pay more to get more `initial cash`\n- **This isn't unfair, but mirrors real-life entrepreneurship:**\n  some people managed to start with more money and more resources;\n  while others had to start with less. \n  This design allows players to **experience alternate realities**,\n  to understand how **internal** `skills + ambition` interact with\n  **external** `funding + resources` to impact success\n  ",roomConf:{logo:{im:"/ui/icons/logo.jpg",name:"Logo"},name:{ph:"Startup Name"},info:{ph:"Idea Description (Markdown supported)"},public:{bool:!0,name:"Public"},password:{ph:"Password",if:e=>!e.public},tier:{pick:{0:"Free",1:"$1",2:"$2",5:"$5",c:"Custom"},name:"Tier",if:e=>!e.id},price:{ph:"Custom Tier ($)",if:e=>e.tier=="c"},refund:{btn:"Refund & Delete",click:e=>e._refund(),if:e=>{var t;return(t=e.pay)==null?void 0:t.paid}},cash0:{dic:a},refundInfo:{md:`7-day one-click refund (less ${s})`},fairInfo:{md:"[Does this make the game unfair?]()",click:()=>r(n.fairness)}},roomPayInfo:a};export{n as t};
