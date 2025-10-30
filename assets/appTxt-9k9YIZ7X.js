import{Z as a,bO as i,aM as o}from"./index-DI_G0BoI.js";const r=e=>{var t;return e.pay||(e.price=(e.tier=="c"?parseInt(e.price):e.tier)||0),{Price:"$"+e.price,"Initial Cash":"$"+o(Math.max(e.price,.1)*1e6),Paid:((t=e.pay)==null?void 0:t.paid)||0}},s="[transaction fee](https://stripe.com/en-sg/pricing)",n={app:{logo:"/ui/icons/EG.webp",name:"EntreGames",info:`
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
  `},appDemo:{"1.1_home":`
### [EntreGames](/)
Welcome, future entrepreneur! 🚀
Discover more than just a game - this is your playground to learn entrepreneurship through AI-generated scenarios and real-world challenges. Connect with a vibrant community of innovators and meet your potential future cofounders!`,"1.1_create,1.1_fairness":"Build your empire! 🏗️\nCreate public or private *startups* with custom logos, names, and descriptions. Choose from flexible pricing options - from `free` to custom amounts - and experience alternate realities where entrepreneurs start with different levels of initial capital and resources.","1.2_explore":`Discover cool ideas! 🔍
Explore innovative startups and get inspired by the creative ventures of fellow players. Find projects that spark your entrepreneurial spirit!`,"2.1_info,3.1_profile":`Join the action! 🤝
Dive into startup teams as CEO, CTO, or other key roles. Connect with like-minded strangers who share your entrepreneurial passion and ambition!`,"2.2_scenario,2.2_action":`
Ready to play? 🎲
The game is conversation-based — kinda like [Werewolf](https://en.wikipedia.org/wiki/Mafia_(party_game))!
- The AI will send **Startup Scenarios** (black) and track your company's progress.
- You can send **Actions** (blue) to steer your startup, and **Discussions** to rally your team.
- Every choice matters — so strategize and have fun!`,"2.2_info":`⚠️ Strategic Thinking Required!
We treat **actions** and **ideas** differently - your decisions shape your startup's destiny, so choose wisely!`,"2.3_trend":`📈 Watch your journey unfold!
Track your startup's progress with dynamic plots of key metrics and see how your decisions impact growth.`,"2.4_comments":`💬 See what others think!
Check the comments to learn how the market and outsiders react to your startup's journey.`},appWarn:"WIP: demo UI, demo data, solo dev",urls:{github:"https://github.com/EntreGames/app",issues:"https://github.com/EntreGames/app/issues",group:"https://chat.whatsapp.com/B9Dxes7NW0hHeryw4gqbBQ?mode=ems_copy_t"},createRoom:"Create A Startup",viewStartups:"Explore Startups",tabs:{home:{t:"Welcome",i:"home"},explore:{t:"Explore",i:"explore"},mine:{t:"Mine",i:"lightbulb"},stars:{t:"Stars",i:"star"}},tabs2:{info:{t:"Info",i:"info"},play:{t:"Play",i:"sports_esports"},trend:{t:"Trend",i:"insights"},comments:{t:"Comments"}},sortItems:i({val:"VAL",mrr:"MRR",dau:"DAU",cash:"Cash",n_stars:"Stars",price:"Price (Init Cash)",id:"Create Time"}),sendTypes:{action:"Send As Action",discussion:"Send As Discussion"},sendTypes2:{comment:"Send As Comment"},sendInfo:`
### Actions vs. Ideas (Discussions)
- Ideas are cool,  
- But only **actions** matter.  
- Our AI only considers your **actions** when predicting scenarios and metrics.  
- **Stay real**: don't make up actions you wouldn't actually take in real life.  
  This is a game for learning entrepreneurship,  
  not for tricking the system to get scores.  
  `,sendPh:"write Action or Discussion",sendPh2:"write Comment",nextScenario:"Predict Next Scenario",ceoOnly:"Only the CEO can do this",roleTaken:"Role already taken!",roleNeeded:"Pick a role first!",clearConfirm:"Confirm **resetting**? (clears all messages, unrecoverable!)",founded:e=>`Founded ${e}`,noRefund:"Non-refundable after 7 days",refunded:e=>`Refunded \`${e}\` after reducing ${s} (may take a few days to reach the bank)`,fairness:"\n- `cash` represents `health level`\n- Players can pay more to get more `initial cash`\n- **This isn't unfair, but mirrors real-life entrepreneurship:**\n  some people managed to start with more money and more resources;\n  while others had to start with less. \n  This design allows players to **experience alternate realities**,\n  to understand how **internal** `skills + ambition` interact with\n  **external** `funding + resources` to impact success\n  ",roomConf:{logo:{im:"/ui/icons/logo.jpg",name:"Logo"},name:{ph:"Startup Name"},info:{ph:"Idea Description (Markdown supported)"},public:{bool:!0,name:"Public"},password:{ph:"Password",if:e=>!e.public},tier:{pick:{0:"Free",1:"$1",2:"$2",5:"$5",c:"Custom"},name:"Tier",if:e=>!e.id},price:{ph:"Custom Tier ($)",if:e=>e.tier=="c"},refund:{btn:"Refund & Delete",click:e=>e._refund(),if:e=>{var t;return(t=e.pay)==null?void 0:t.paid}},cash0:{dic:r},refundInfo:{md:`7-day one-click refund (less ${s})`},fairInfo:{md:"[Does this make the game unfair?]()",click:()=>a(n.fairness)}},roomPayInfo:r};export{n as t};
