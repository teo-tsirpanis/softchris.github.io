(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{279:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_10-commands-you-don-t-want-to-be-without-in-net-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_10-commands-you-don-t-want-to-be-without-in-net-core","aria-hidden":"true"}},[e._v("#")]),e._v(" 10 commands you don't want to be without in .Net Core")]),e._v(" "),o("p",[e._v("Follow me on "),o("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),o("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/wrxdtem3goz8clflbjeo.jpg",alt:""}})]),e._v(" "),o("p",[e._v("TLDR; this is an article describing 10 great commands in .Net Core CLI, hopefully, there's something for everybody here, from absolute beginner to more seasoned developer.")]),e._v(" "),o("p",[e._v("I come from a long background of doing .Net. One of the best parts of it was Visual Studio, an absolutely outstanding IDE that allowed you to easily write code with code completion, easy debugging and packaging of your apps. Then, years later after I  first started with .Net came .Net Core and with it the ability to use .Net cross-platform. With .Net Core came also a very capable CLI tool. Using the old .Net you knew there was an MSBuild command in the background but you seldom needed to care, Visual Studio handled it all for you.")]),e._v(" "),o("p",[e._v("Using .Net Core though you have the best of both worlds, still the first-class experience of either Visual Studio or the amazing Visual Studio Code AND with the CLI tool we have a first-rate terminal experience as well.")]),e._v(" "),o("blockquote",[o("p",[e._v("So why use terminal commands, I'm a UI guy?")])]),e._v(" "),o("p",[e._v("I know many of you are thinking like this (I used to as well) and the answer is that there is more than one reason.")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Scripting")]),e._v(" is a very good reason, scripting allows us to easily set up CI/CD")]),e._v(" "),o("li",[o("strong",[e._v("Speed")]),e._v(" is one factor, working with the terminal is usually faster than using a visual environment.")]),e._v(" "),o("li",[o("strong",[e._v("Choose your own editor")]),e._v(", it also allows you to use the favorite editor of your choice. We all have our favorite editor. .Net used to be very tightly coupled to Visual Studio, now with .Net Core CLI you can quite easily build, test, package, publish your projects through the terminal.")])]),e._v(" "),o("p",[e._v("Regardless of the reason you find the most compelling, it's good to know what commands are run underneath and get some insights on what they do for you. So let's look at the 10 most important commands using the .Net Core CLI:")]),e._v(" "),o("p",[e._v("## -1- dotnet new\nThis command helps you scaffold a project. So usually you call it like this:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dotnet new <type of project template> - o <name of directory>\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("A real example might look like this:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dotnet new console -o app\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("The above will create a console project in the directory "),o("code",[e._v("app")]),e._v(". There's a lot more to this command so have a look at the docs page")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-new?tabs=netcore22&?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet new command"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("## -2- dotnet restore\nThis restores the dependencies of a project. What does that mean exactly? Well, when you have added NuGet packages to your solution that adds a reference to your project file, your "),o("code",[e._v(".csproj")]),e._v(". If you check out the project from GitHub those packages are maybe not versioned and will need to be added to your project. Running "),o("code",[e._v("restore")]),e._v(" at this point will fetch the packages from the NuGet repository.")]),e._v(" "),o("p",[e._v("The command can be run in two ways:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Explicitly")]),e._v(", you type it and it fetches the packages you need")]),e._v(" "),o("li",[o("strong",[e._v("Implicitly")]),e._v(", it runs as part of another command being executed")])]),e._v(" "),o("p",[e._v("Here's a full list of commands that runs "),o("code",[e._v("restore")]),e._v(" implicitly:")]),e._v(" "),o("ul",[o("li",[e._v("dotnet new")]),e._v(" "),o("li",[e._v("dotnet build")]),e._v(" "),o("li",[e._v("dotnet build-server")]),e._v(" "),o("li",[e._v("dotnet run")]),e._v(" "),o("li",[e._v("dotnet test")]),e._v(" "),o("li",[e._v("dotnet publish")]),e._v(" "),o("li",[e._v("dotnet pack")])]),e._v(" "),o("p",[e._v("To learn more about this command, read more here:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-restore?tabs=netcore2x&wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet restore command"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("## -3- dotnet build")]),e._v(" "),o("p",[e._v("This command builds a project and all of its dependencies. If you are at the root directory and you have a solution, then it will build the whole solution, so all projects within the solution. If you are in a specific project directory then it will only build that directory, the "),o("em",[e._v("where")]),e._v(" matters. There's a lot more to the "),o("code",[e._v("build")]),e._v(" command than that so have a look at some more details at the following link:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-build?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet build command"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"_4-dotnet-run"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-dotnet-run","aria-hidden":"true"}},[e._v("#")]),e._v(" -4- dotnet run")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("run")]),e._v(" command is what you use to execute your code.")]),e._v(" "),o("p",[e._v("To use it simply place yourself in the project directory of the project you want to run and type:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dotnet run\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("NOTE, It's used in the context of projects, not built assemblies. If you're trying to run a framework-dependent application DLL instead, you must use "),o("code",[e._v("dotnet")]),e._v(" without a command. For example, to run myapp.dll, use:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dotnet myapp.dll\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("To read more about this command check out the following link:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-run?tabs=netcore21&wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet run command"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("## -5- dotnet test")]),e._v(" "),o("p",[e._v("This command is what you use to execute the tests of a test project. This comes with quite a few arguments which enable you to run specific tests or the whole test suite.")]),e._v(" "),o("p",[e._v("To read more about this command, have a look at the following link:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-test?tabs=netcore21&wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet test command"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("if you are completely new to testing, check out this article I wrote on getting started with testing:")]),e._v(" "),o("blockquote",[o("p",[e._v("https://dev.to/dotnet/testing-in-net-core-ojh")])]),e._v(" "),o("p",[e._v("## -6- dotnet pack")]),e._v(" "),o("p",[e._v("Now we are getting into an interesting area namely creating your own NuGet packages. You create a package with this command and you can have packages in a local repository as well as the official global one. To learn more about this have look at the official docs page:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-pack?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet pack command"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Also, check out an article I wrote about how to do this from scratch and learn how to publish your package so someone else can download it:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://dev.to/dotnet/how-you-can-create-reusable-packages-for-net-core-using-vs-code-c-and-nuget-3kn9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating your first package in NuGet"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("## -7- dotnet clean")]),e._v(" "),o("p",[e._v("This command cleans the output of a project. This means it takes away both the contents of obj as well as bin folders. This command comes with a few arguments so you can for example choose to only clean a specific runtime or framework. Read more about this command at the official docs:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-clean?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet clean command"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"_8-dotnet-sln"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-dotnet-sln","aria-hidden":"true"}},[e._v("#")]),e._v(" -8- dotnet sln")]),e._v(" "),o("p",[e._v("This is the command you use to manage your solution. If you are completely new to dotnet, a solution keeps track of many projects and it's great way of managing a group of different projects that logically belongs together to do things like building or maybe publish an executable. Because this command manages everything around solutions it's good to know how to start out.")]),e._v(" "),o("p",[e._v("To create a solution you just place yourself in a directory of your choosing and run")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dotnet new sln\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("This will create a solution file with the same name as the directory. For example:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd hello\ndotnet new sln\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])]),o("p",[e._v("This will create a "),o("code",[e._v("hello.sln")]),e._v(" file. To manage the solution you have the following commands at your disposal:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("add")]),e._v(", this will add a project to your solution.")]),e._v(" "),o("li",[o("strong",[e._v("remove")]),e._v(", this will remove a project from your solution")]),e._v(" "),o("li",[o("strong",[e._v("list")]),e._v(", this lists all the projects in a solution")])]),e._v(" "),o("p",[e._v("To learn more about this command, check out the official docs page:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-sln?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet sln command"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Additionally, have a look at the blog post I wrote teaching you how to create solutions, projects and how to start out with .Net Core")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://dev.to/dotnet/how-you-can-get-started-with-net-core-and-c-in-vs-code-30gc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Starting out with .Net Core"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("## -9- dotnet add/remove reference")]),e._v(" "),o("p",[e._v("This command will add a project to your project. The purpose is for example for your project to use code from another project. For that to be possible, you first need to add a reference to that project before the compiler and your IDE will recognize it. For example, you are currently developing the console project "),o("code",[e._v("app")]),e._v(" and you want to add the project "),o("code",[e._v("lib")]),e._v(" to "),o("code",[e._v("app")]),e._v(". You can do this in one of two ways:")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Add a reference from solution dir")]),e._v(",  if you are standing in the solution directory (one level above the app directory) then you type "),o("code",[e._v("dotnet add app/app.csproj reference lib/lib.csproj")])]),e._v(" "),o("li",[o("strong",[e._v("Add a reference from the current directory")]),e._v(", then you would type "),o("code",[e._v("dotnet add reference lib1/lib1.csproj")])])]),e._v(" "),o("p",[e._v("To learn more about this command, check out the docs page:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-add-reference?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet add reference command"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("## -10- dotnet add/remove package")]),e._v(" "),o("p",[e._v("Now we are agin talking about NuGet packages. The "),o("code",[e._v("add")]),e._v(" command allows us to add a package from NuGet by specifying it by name:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dotnet add package Newtonsoft.Json\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("This will add "),o("code",[e._v("Newtonsoft.Json")]),e._v(" package to our project file. It will also run a "),o("code",[e._v("dotnet restore")]),e._v(" command which will fetch the package from NuGet's repository")]),e._v(" "),o("p",[e._v("To learn more about this command, have a look at this link:")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-add-package?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet add package command"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("p",[e._v("Here are some references you might need:")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("install dotnet"),o("OutboundLink")],1),e._v("\nThis will take you to the install page for .Net Core. While you are there, check out "),o("a",{attrs:{href:"https://dotnet.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://dotnet.microsoft.com"),o("OutboundLink")],1),e._v(". That's a great site for anything .Net, full of tutorials.")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://dev.to/azure/net-core-series-serverless-graphql-nuget-testing-entity-framework-and-more-5dgk",target:"_blank",rel:"noopener noreferrer"}},[e._v(".Net Core Series"),o("OutboundLink")],1),e._v("\nHave a look at this series of .Net Core articles I wrote, everything from your first steps in .Net Core, to Serverless and even GraphQL")])])])])},[],!1,null,null,null);t.default=r.exports}}]);