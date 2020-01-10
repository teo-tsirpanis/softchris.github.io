(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{390:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"serverless-—-from-the-beginning-using-azure-functions-azure-portal-part-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverless-—-from-the-beginning-using-azure-functions-azure-portal-part-i","aria-hidden":"true"}},[e._v("#")]),e._v(" Serverless — from the beginning, using Azure functions ( Azure portal ), part I")]),e._v(" "),a("p",[e._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/0%2AT7Jl5TOHXgXQ9qOA.jpg",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("Serverless is Cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. So essentially you can focus on writing code as your Cloud Provider does the rest")])]),e._v(" "),a("p",[e._v("This is the first part of this series:")]),e._v(" "),a("ul",[a("li",[e._v("Serverless — from the beginning, using Azure functions ( Azure portal ), part I, "),a("strong",[e._v("you are here")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dev.to/azure/serverless-from-the-beginning-part-ii-getting-to-know-your-portal-ide-101k",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless — from the beginning, using Azure functions ( Azure portal ), part II"),a("OutboundLink")],1),e._v(", we will cover how to use our Portal IDE more efficiently")]),e._v(" "),a("li",[e._v("Serverless — from the beginning, using Azure functions ( VS Code ), part III, in progress")]),e._v(" "),a("li",[e._v("Serverless — from the beginning, using Azure functions ( Azure CLI ), part IV, in progress")])]),e._v(" "),a("p",[e._v("In this article we will cover the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Serverless")]),e._v(" , What is Serverless and why it may be a good choice")]),e._v(" "),a("li",[a("strong",[e._v("Function apps")]),e._v(" , triggers, and bindings")]),e._v(" "),a("li",[a("strong",[e._v("Functions")]),e._v(" in function apps, Here we will cover things like languages it supports, authoring choices, testing it out, monitoring logging and setting of authorization level and much more")])]),e._v(" "),a("p",[e._v("We already assume that putting your apps in the Cloud is a given. With that we mean you’ve seen the benefits that mean in terms of not having to maintain hardware, only pay for what you actually use and so on.")]),e._v(" "),a("blockquote",[a("p",[e._v("TLDR; if you just want to learn how to build an Azure function, and don’t want a long speech on theory, then jump to the headline called “Creating a function app”, you can always read some Serverless and Azure theory later 😃")])]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("p",[e._v("There is so much to learn on this topic and there are some great docs as well as LEARN modules to help you in your learning process:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure functions docs overview"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Azure function LEARN modules")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/learn/modules/create-serverless-logic-with-azure-functions/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create your first Azure function"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/learn/modules/execute-azure-function-with-triggers/1-introduction?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Execute Azure functions with triggers"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/learn/modules/chain-azure-functions-data-using-bindings/1-introduction?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chain Azure functions together"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"the-many-choices-in-the-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-many-choices-in-the-cloud","aria-hidden":"true"}},[e._v("#")]),e._v(" The many choices in the Cloud")]),e._v(" "),a("p",[e._v("Now, being in the Cloud means you have options, A LOT of options in fact. You can be on the lowest level deciding exactly what memory, or hard drive type, your apps can run on. Then you can be on a more managed level where you are happy to create a Virtual Machine, a so-called VM, where you can install the OS and software you need. There are still more steps on this ladder namely running your applications in App Services where you don’t have a VM anymore, just a place for your code to reside and yes you can decide what OS to run this on but that’s pretty much it, it’s a SaaS, software as a Service platform. BUT, there is a step above that — Serverless.")]),e._v(" "),a("h2",{attrs:{id:"introduction-to-serverless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-serverless","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction to Serverless")]),e._v(" "),a("p",[e._v("So what does Serverless mean? Serverless is Cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. So essentially you can focus on writing code as your Cloud Provider does the rest.")]),e._v(" "),a("h3",{attrs:{id:"faas-—-function-as-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faas-—-function-as-a-service","aria-hidden":"true"}},[e._v("#")]),e._v(" FaaS — function as a service")]),e._v(" "),a("p",[e._v("A FaaS, function as a service is a category of Cloud Computing Services and is about offering a Platform where the infrastructure is maintained and your main worry is the code you write. An application built following the above model is said to use a "),a("em",[e._v("serverless architecture")])]),e._v(" "),a("p",[e._v("All the great Cloud providers have a FaaS offering:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("AWS")]),e._v(" , has AWS Lambda")]),e._v(" "),a("li",[a("strong",[e._v("Google")]),e._v(" , has Google Cloud Functions")]),e._v(" "),a("li",[a("strong",[e._v("IBM/Apache")]),e._v(" , has OpenWhisk")]),e._v(" "),a("li",[a("strong",[e._v("Oracle")]),e._v(" , has Cloud Fn")]),e._v(" "),a("li",[a("strong",[e._v("Microsoft")]),e._v(" , has Microsoft Azure Functions")])]),e._v(" "),a("p",[e._v("Ok, what benefits does it offer then?")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Everything is functions")]),e._v(" , Your business logic runs as functions")]),e._v(" "),a("li",[a("strong",[e._v("NO Manual provisioning")]),e._v(" , you don’t have to manually provision or scale infrastructure.")]),e._v(" "),a("li",[a("strong",[e._v("Managed infrastructure")]),e._v(" , The cloud provider manages infrastructure.")]),e._v(" "),a("li",[a("strong",[e._v("Automatic scaling")]),e._v(" , Your app is automatically scaled out or down depending on load.")])]),e._v(" "),a("h2",{attrs:{id:"serverless-on-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverless-on-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" Serverless on Azure")]),e._v(" "),a("p",[e._v("Azure has two kinds of approaches for Serverless architecture")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/services/logic-apps/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Logic Apps, intro"),a("OutboundLink")],1),e._v(", Azure Logic Apps enables you to create powerful workflows")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/services/functions/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions"),a("OutboundLink")],1),e._v(", Azure Functions is a serverless application platform. Developers can host business logic that can be executed without provisioning infrastructure")])]),e._v(" "),a("h3",{attrs:{id:"what-else-is-there-to-know-about-serverless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-else-is-there-to-know-about-serverless","aria-hidden":"true"}},[e._v("#")]),e._v(" What else is there to know about Serverless?")]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("Is it all unicorns and rainbows?")])])]),e._v(" "),a("p",[e._v("Well, Serverless is definitely great but there are some things we need to know about them like:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("They are stateless")]),e._v(" , function instances are created and destroyed on demand. If state is required, it can be stored in an associated storage service")]),e._v(" "),a("li",[a("strong",[e._v("They are event-driven")]),e._v(" , they run only in response to an event (called a “trigger”), such as receiving an HTTP request, or a message being added to a queue. So essentially you declare where data comes from and where it goes. You do this declaratively with something called bindings which means you don’t need to code to talk to queues, blobs, hubs, only business logic is needed")])]),e._v(" "),a("p",[a("strong",[e._v("They do have Drawbacks")]),e._v(" , drawbacks are in the form of limitations on "),a("em",[e._v("execution time")]),e._v(" and "),a("em",[e._v("execution frequency")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Timeout")]),e._v(" , The timeout is 5 minutes, This timeout is configurable to a maximum of 10 minutes. If your function requires more than 10 minutes to execute, you can host it on a VM. Additionally, if your service is initiated through an HTTP request and you expect that value as an HTTP response, the timeout is further restricted to 2.5 minutes, BUT there’s also an option called "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Durable Functions"),a("OutboundLink")],1),e._v(" that allows you to orchestrate the executions of multiple functions without any timeout")]),e._v(" "),a("li",[a("strong",[e._v("Execution frequency")]),e._v(" , If you expect your function to be executed continuously by multiple clients, it would be prudent to estimate the usage and calculate the cost of using functions accordingly. It might be cheaper to host your service on a VM")])]),e._v(" "),a("h3",{attrs:{id:"serverless-vs-app-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverless-vs-app-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Serverless vs App Services")]),e._v(" "),a("p",[e._v("It’s easy to think that your first go-to, for putting apps in Azure, is AppService that fits most likely with your mental model as a developers, you want to move the app that you have from On-Premise to the Cloud and to do so you need to provision databases, creating your Services in App Service and that’s it right? Well, most applications are seldom that simple, they tend to need to talk to a number of subsystems to maybe log in, or grab a piece of data somewhere or perform a computation.")]),e._v(" "),a("p",[e._v("All these side things are maybe the concern of more than one app in your ecosystem so it makes sense to move them out into separate services. Then you might realize you only need to call on these services very seldom like when a new user is created or there is an incoming request. Your response at that point is maybe to place that incoming message on a Queue, or insert a row in a Database or maybe create a Slack notification.")]),e._v(" "),a("p",[e._v("What we are saying here is that maybe we don’t need to pay for a full AppService and the uptime and responsiveness it gives us, but instead we need a framework that can trigger a function based on a predefined event and that can then carry out a computation that results in a side effect like calling another service/database/queue/whatever.")]),e._v(" "),a("p",[e._v("Now we have come to the sweet spot where Serverless really shines, "),a("em",[e._v("seldom called services")]),e._v(" that need to do something in response to some kind of event happening.")]),e._v(" "),a("p",[e._v("In a word")]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("Serverless computing helps solve the allocation problem by scaling up or down automatically, and you’re only billed when your function is processing work. Speaking of billed, if your FaaS is reading/writing towards a storage that you provisioned, then you are paying for function execution as well as that storage, so keep that in mind authoring your FaaS.")])])]),e._v(" "),a("h2",{attrs:{id:"what-is-a-function-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-function-app","aria-hidden":"true"}},[e._v("#")]),e._v(" What is a function app?")]),e._v(" "),a("p",[e._v("Functions are hosted in an execution context called a function app. Which means what? Think of the Function app as the project you host your functions in.")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Ok, there are some things that need to exist before we can get our function up there in the cloud. Those are:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Service plan")]),e._v(" , There are two choices of plans "),a("em",[e._v("Consumption service plan")]),e._v(", CSP and "),a("em",[e._v("Azure App Service plan")]),e._v(", ASP CSP has automatic scaling and bills you when your functions are running and configurable timeout period for the execution of a function. By default, it is 5 minute, ASP allows you to avoid timeout periods by having your function run continuously on a VM that you define")]),e._v(" "),a("li",[a("strong",[e._v("Storage account")]),e._v(" , function app must be linked to a storage account. It uses this for internal operations such as logging function executions and managing execution triggers. Also, function code and configuration file are stored here")])]),e._v(" "),a("h2",{attrs:{id:"creating-a-function-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-function-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a function app")]),e._v(" "),a("p",[e._v("Now there are different ways of creating a Function app, namely:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Portal")]),e._v(" , Using the Azure Portal")]),e._v(" "),a("li",[a("strong",[e._v("CLI")]),e._v(" , Using the Azure CLI")]),e._v(" "),a("li",[a("strong",[e._v("VS Code")]),e._v(" , Using VS Code to scaffold an Azure Function app and Azure Functions using some amazing plugins made for the purpose.")])]),e._v(" "),a("p",[e._v("In this article, we will focus on the first option but in doing so we will put some focus on some great concepts you need to know about, so stay with me cause we are about to do some coding next:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/500/0*FN7RW_4zk91WGQ9a.gif",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"select-the-correct-template-function-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-the-correct-template-function-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Select the correct template, Function App")]),e._v(" "),a("p",[e._v("Let’s head to the portal and log in at")]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("portal.azure.com")])])]),e._v(" "),a("p",[e._v("Once logged in select the following :")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/0*JPDZJqFHpzJtlQPw.png",alt:""}})]),e._v(" "),a("p",[e._v("So that's, selecting Create a resource, followed by Compute and finally selecting the Function App template.")]),e._v(" "),a("h2",{attrs:{id:"make-the-choices-in-the-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-the-choices-in-the-template","aria-hidden":"true"}},[e._v("#")]),e._v(" Make the choices in the template")]),e._v(" "),a("p",[e._v("Once we’ve selected the Function app template we need to select a few more things. Your UI will at this point look something like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/600/0*JLy6h_Jk4qqjhczJ.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok so the following choices need to be made:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Enter an app name")]),e._v(" , App name must be "),a("em",[e._v("globally unique")]),e._v(" as it will serve as part of base URL")]),e._v(" "),a("li",[a("strong",[e._v("Select a subscription")]),e._v(" , well pick out one of the ones you have")]),e._v(" "),a("li",[a("strong",[e._v("Select a resource group")]),e._v(" , you can choose an existing resource group or create a new one, up to you")]),e._v(" "),a("li",[a("strong",[e._v("Select an OS")]),e._v(" , choices here are Windows or Linux, we opt for Windows cause we need to select something 😃")]),e._v(" "),a("li",[a("strong",[e._v("Select Hosting plan")]),e._v(" , this should be "),a("em",[e._v("Consumption plan")]),e._v(", we mentioned Consumption plans earlier in this article and why it’s the better choice")]),e._v(" "),a("li",[a("strong",[e._v("Select geography")]),e._v(" , well select the region closest to you")]),e._v(" "),a("li",[a("strong",[e._v("Runtime stack")]),e._v(" , this is the language you are going to be coding in so we select Javascript")]),e._v(" "),a("li",[a("strong",[e._v("Create a new storage account")]),e._v(" , let’s take an existing or create a new one")]),e._v(" "),a("li",[a("strong",[e._v("Enable application insights")]),e._v(" , for stats and other types of application tracking")])]),e._v(" "),a("p",[e._v("Now hit the button  "),a("strong",[e._v("CREATE")])]),e._v(" "),a("p",[e._v("This takes a while, like a few minutes. Have some coffee or other hot beverage at this point:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/500/0*_PScLnXn4uJSGshs.gif",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"verify-your-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-your-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Verify your app")]),e._v(" "),a("p",[e._v("Check that it has a public URL and it is possible to navigate to its default page")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/0*8vekjnpg1OjFoUbW.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok great we have a default page, now what? Well, it’s time to add a function to our Function app.")]),e._v(" "),a("h2",{attrs:{id:"creating-a-function-for-your-function-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-function-for-your-function-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a Function, for your Function app")]),e._v(" "),a("p",[e._v("There are two UI behaviors here depending on whether you have no functions added to your Function app, so you are starting out fresh or the second option being that you have an existing Function app with at least one function in it.")]),e._v(" "),a("p",[e._v("When you create a new function there are some decisions you need to make before you can start coding like:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Trigger type")]),e._v(" , this is about deciding what should trigger the invocation of your function like an HTTP call or maybe a change to a database row or something else")]),e._v(" "),a("li",[a("strong",[e._v("Authoring")]),e._v(" , there are three ways to author your function, in VS Code, Any editor + Core Tools or In-portal")])]),e._v(" "),a("h2",{attrs:{id:"starting-fresh-—-no-functions-added-yet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-fresh-—-no-functions-added-yet","aria-hidden":"true"}},[e._v("#")]),e._v(" Starting fresh — no functions added (yet)")]),e._v(" "),a("p",[e._v("When adding your first function, you are presented with the Quickstart screen.")]),e._v(" "),a("p",[e._v("At this point, the following is shown in the middle of the page")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/472/0*eQPmtvpq7iBlRXfk.png",alt:""}})]),e._v(" "),a("p",[e._v("Let’s create that function by hitting New function")]),e._v(" "),a("h3",{attrs:{id:"select-authoring-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-authoring-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Select authoring type")]),e._v(" "),a("p",[e._v("Now you are faced with the choice of how to author your Function:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("VS Code")]),e._v(" , this is a great choice, plenty of plugins supporting this option")]),e._v(" "),a("li",[a("strong",[e._v("Any editor")]),e._v(" + Core tools, a more agnostic choice, but definitely a good choice as well")]),e._v(" "),a("li",[a("strong",[e._v("In-portal")]),e._v(" , you will write code in the Portal")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/0*x2kZ3tdbFZOamZxv.png",alt:""}})]),e._v(" "),a("p",[e._v("For now, we will go with the In-portal option")]),e._v(" "),a("h3",{attrs:{id:"select-trigger-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-trigger-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Select trigger type")]),e._v(" "),a("p",[e._v("We are now faced with:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Webhook + API")]),e._v(" , function will run as soon as a certain URL is hit")]),e._v(" "),a("li",[a("strong",[e._v("Timer")]),e._v(" , function will run according to a schedule")]),e._v(" "),a("li",[a("strong",[e._v("More templates")]),e._v(" , there a ton more templates worth exploring")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/0*1qEhbpDTelYEgpnq.png",alt:""}})]),e._v(" "),a("p",[e._v("For now, we will go with the Webhook + API option.")]),e._v(" "),a("p",[e._v("It’s a long list of templates to choose from. Don’t you feel excited that there is so much more? 😃")]),e._v(" "),a("h3",{attrs:{id:"voila-your-function-is-scaffolded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voila-your-function-is-scaffolded","aria-hidden":"true"}},[e._v("#")]),e._v(" Voila, your function is scaffolded")]),e._v(" "),a("p",[e._v("This is now our coding environment:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/0*m1uDb9-OoDZq6T8L.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"pre-existing-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-existing-functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Pre-existing functions")]),e._v(" "),a("p",[e._v("In this scenario, we already have at least one function in our Function app. You want to look for a text saying Function + on in the left menu, it should look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/498/0*TLiNW62It41HI7Ks.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"select-trigger-type-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-trigger-type-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Select trigger type")]),e._v(" "),a("p",[e._v("Clicking the + sign will present you with the following screen in the main field:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/0*2Hd2igr8TnqG7uQ6.png",alt:""}})]),e._v(" "),a("p",[e._v("This screen allows you to choose a trigger type (HTTP, Timer, or Data) and programming language (C#, JavaScript, F# or Java). Then, based on your selections, Azure will generate the function code and configuration for you with some sample code provided to display out the input data received in the log")]),e._v(" "),a("p",[e._v("We choose "),a("strong",[e._v("HTTP Trigger")]),e._v(", so the first option.")]),e._v(" "),a("p",[e._v("We are then faced with naming our function and doing an initial selection on authorization level (we can change that part later on)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/960/0*UhUEIMBbr2QgUznI.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"taking-it-for-a-spin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taking-it-for-a-spin","aria-hidden":"true"}},[e._v("#")]),e._v(" Taking it for a spin")]),e._v(" "),a("p",[e._v("We can test it in the portal or hit the URL. To get a URL we click get function URL and test it in a browser:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/0*fu7rcHCoFvKfUIxy.png",alt:""}})]),e._v(" "),a("p",[e._v("After you’ve chosen to copy the URL you head to the browser input the URL and make sure to add &name=chris. Cause if you look at your Javascript code you see that it expects the parameter name in either the body or as a URL parameter. It should look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/0*8zk8SjZVB7HzdZpo.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"build-our-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-our-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Build our service")]),e._v(" "),a("p",[e._v("Ok then shall we build something more fun than a hello world? Ok, it's not going to be a ton more fun but it's at least something you can cringe over like a colleague of mine did "),a("em",[e._v("look Adam you've made it into the blog post haha")]),e._v(".")]),e._v(" "),a("p",[e._v("Ok, we are going to build a… wait for it, drumrolls, a "),a("em",[e._v("dad jokes")]),e._v(" service. You know those really bad puns told by a parent that compels you to deny any relations to them, yes those jokes. Google is my friend, so let’s start Googling for some jokes and store them in a list:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" dadJokes "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Did you hear about the restaurant on the moon? Great food, no atmosphere."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"What do you call a fake noodle? An Impasta."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"How many apples grow on a tree? All of them."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Want to hear a joke about paper? Nevermind it\'s tearable."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"I just watched a program about beavers. It was the best dam program I\'ve ever seen."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Why did the coffee file a police report? It got mugged."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"How does a penguin build it\'s house? Igloos it together."')]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("There, if I can’t unsee it, neither can you 😉")]),e._v(" "),a("p",[e._v("Ok, next step is to find some pictures of dogs looking like they are laughing because of the Internet right 😉")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" punDogs "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"image1.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"image2.jpg"')]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("What, I didn’t give you the actual image URL, you’re a big developer, I’m sure you can find pictures of dogs on the Internet, or why not cats 😉")]),e._v(" "),a("p",[e._v("Now to select a random dad joke and random image:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" newNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" dadJokes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" dogImageUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" punDogs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Lastly, let’s answer with an HTML response:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"text/html"')]),e._v(" \n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<h3>'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("dadJokes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("newNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'</h3>'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<br><img src=\"'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" punDogs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("dogImageUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'\"/>'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Let’s save our code and make sure to set the authorization level to "),a("em",[e._v("Anonymous.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*wiekA-NZ5RI9LNbaI9MjgQ.png",alt:""}})]),e._v(" "),a("p",[e._v("Above we are describing how to click the menu option "),a("code",[e._v("Integrate")]),e._v(" in our left menu followed by selecting "),a("code",[e._v("Anyonymous")]),e._v(" in our "),a("code",[e._v("Authorization level")]),e._v(" dropdown.")]),e._v(" "),a("p",[e._v("Because why would we want to restrict the usage of this profound function to the outside world? 😉")]),e._v(" "),a("p",[e._v("Taking our app for a spin it now looks like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/0*iV1lLrHY2JSvvA6F.png",alt:""}})]),e._v(" "),a("p",[e._v("That’s it for this time. We’ve taken you through building your very first app, it wasn’t that hard, was it? 😃")]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("There is so much more to say on the Serverless topics. So many different ways we can trigger this function other than HTTP and integrations that are already there and waiting for you to use them. But we have to save something for future parts of this series. Hopefully, you’ve gotten a good idea of what Serverless is and when to use it and how to create your first one of many Azure functions.")]),e._v(" "),a("p",[e._v("Most of all think about the old ways of doing things like handling infrastructure yourself, and thinking about for example load balancing is a thing you barely need to consider yourself with.")]),e._v(" "),a("p",[e._v("See you in the next part hopefully 😃")]),e._v(" "),a("hr")])},[],!1,null,null,null);t.default=s.exports}}]);