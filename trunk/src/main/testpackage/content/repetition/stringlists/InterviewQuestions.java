package testpackage.content.repetition.stringlists;

/**
 * Created with IntelliJ IDEA.
 * User: makstitoff
 * Date: 29.01.13
 * Time: 17:29
 * To change this template use File | Settings | File Templates. DELPHI_API(getDelphiApi()),
 */
public enum InterviewQuestions implements StringTypeInterface {

    ACTION_SCRIPT(getActionScript()), AJAX(getAjax()), ANDROID(getAndroid()), ANT(getAnt()),
    APACHE_AXIS(getApacheAxis()), ARCHITECTURE(getArchitecture()), AUTO_IT(getAutoIt()), BASH(getBash()), C(getC()),
    COLLECTIONS(getCollections()), CONCURRENCY(getConcurrency()), CPLUSPLUS(getCPlusPlus()), CQ5(getCq5()),
    CRYPTOGRAPHY(getCryptography()), CRYSTAL_REPORT(getCrystalReport()), CSHARP(getCSharp()), CSS(getCss()),
    DB(getDb()), DEBUGGING(getDebugging()), DELPHI(getDelphi()), DELPHI_ACTIVEX(getDelphiActiveX()), DELPHI_API(getDelphiApi()),
    DELPHI_COM(getDelphiCom()), DELPHI_COM_PLUS(getDelphiComPlus()), DELPHI_DCOM(getDelphiDCom()),
    DELPHI_OLE(getDelphiOle()), DELPHI_TCP(getDelphiTcp()), DELPHI_UDP(getDelphiUdpSockets()), ECLIPSE(getEclipse()),
    EJB(getEjb()), EXT_JS(getExtJs()), FELIX(getFelix()), FIREBIRD(getFirebird()), FREEMARKER(getFreeMarker()),
    GIT(getGit()), GRAILS(getGrails()), GROOVY(getGroovy()), HIBERNATE(getHibernate()), HTML(getHtml()),
    HTML5(getHtml5()), INFORMIX(getInformix()), IBATIS(getIBatis()), IOS(getIos()), J2EE(getJ2ee()), JAVA(getJava()),
    JAVA_EE(getJavaEe()), JAVASCRIPT(getJavaScript()), JAVA_SE(getJavaSe()),
    JAVA_WEB_TECHNOLOGIES(getJavaWebTechnologies()), JBOSS(getJBoss()), JDBC(getJdbc()), JMS(getJms()),
    JQUERY(getJQuery()), JS_FRAMEWORKS(getJsFrameworks()), JSON(getJson()), JSP(getJsp()), JSTL(getJstl()),
    JUNIT(getJunit()), LINUX(getLinux()), MAVEN(getMaven()), MOBILE_DEVELOPMENT(getMobileDevelopment()),
    MONGO_DB(getMongoDb()), MS_SQL_SERVER(getMsSqlServer()), MULTITHREADING(getMultithreading()), MYSQL(getMySql()),
    OOP(getOop()), ORACLE(getOracle()), PASCAL(getPascal()), PATTERNS(getPatterns()), PERL(getPerl()), PHP(getPhp()),
    PL_SQL(getPlSql()), POSTGRESQL(getPostgreSql()), PROPOSALS(getProposals()), PYTHON(getPython()), QT(getQt()),
    RUBY(getRuby()), SCRUM(getScrum()), SELENIUM(getSelenium()), SERVLETS(getServlets()), SLING(getSling()),
    SOA(getSoa()), SPRING(getSpring()), SPRING_IOC(getSpringIoc()), SPRING_MVC(getSpringMvc()), SQL(getSql()),
    SWING(getSwing()), TOMCAT(getTomcat()), UML(getUml()), UNIX_SHELL_SCRIPTING(getUnixShellScripting()),
    WEB_DEVELOPMENT(getWebDevelopment()), WEBLOGIC(getWeblogic()), WEB_SERVICES(getWebServices()), WIN_API(getWinApi()),
    WINDOWS(getWindows()), WIN_FORMS(getWinForms()), WSDL(getWsdl()), XHTML(getXhtml()), XML(getXml());

    InterviewQuestions(String[] list) {
        this.list = list;
    }

    private String[] list;

    @Override
    public String[] getList() {
        return list;
    }

    public static String[] getActionScript() {
        return StringListHolder.actionScript;
    }

    public static String[] getAjax() {
        return StringListHolder.ajax;
    }

    public static String[] getAndroid() {
        return StringListHolder.android;
    }

    public static String[] getAnt() {
        return StringListHolder.ant;
    }

    public static String[] getApacheAxis() {
        return StringListHolder.apacheAxis;
    }

    public static String[] getArchitecture() {
        return StringListHolder.architecture;
    }

    public static String[] getAutoIt() {
        return StringListHolder.autoIt;
    }

    public static String[] getBash() {
        return StringListHolder.bash;
    }

    public static String[] getC() {
        return StringListHolder.c;
    }

    public static String[] getCollections() {
        return StringListHolder.collections;
    }

    public static String[] getConcurrency() {
        return StringListHolder.concurrency;
    }

    public static String[] getCPlusPlus() {
        return StringListHolder.cPlusPlus;
    }

    public static String[] getCq5() {
        return StringListHolder.cq5;
    }

    public static String[] getCryptography() {
        return StringListHolder.cryptography;
    }

    public static String[] getCrystalReport() {
        return StringListHolder.crystalReport;
    }

    public static String[] getCSharp() {
        return StringListHolder.cSharp;
    }

    public static String[] getCss() {
        return StringListHolder.css;
    }

    public static String[] getDb() {
        return StringListHolder.db;
    }

    public static String[] getDebugging() {
        return StringListHolder.debugging;
    }

    public static String[] getDelphi() {
        return StringListHolder.delphi;
    }

    public static String[] getDelphiActiveX() {
        return StringListHolder.delphiActiveX;
    }

    public static String[] getDelphiApi() {
        return StringListHolder.delphiApi;
    }

    public static String[] getDelphiCom() {
        return StringListHolder.delphiCom;
    }

    public static String[] getDelphiComPlus() {
        return StringListHolder.delphiComPlus;
    }

    public static String[] getDelphiDCom() {
        return StringListHolder.delphiDCom;
    }

    public static String[] getDelphiOle() {
        return StringListHolder.delphiOle;
    }

    public static String[] getDelphiTcp() {
        return StringListHolder.delphiTcp;
    }

    public static String[] getDelphiUdpSockets() {
        return StringListHolder.delphiUdpSockets;
    }

    public static String[] getEclipse() {
        return StringListHolder.eclipse;
    }

    public static String[] getEjb() {
        return StringListHolder.ejb;
    }

    public static String[] getExtJs() {
        return StringListHolder.extJs;
    }

    public static String[] getFelix() {
        return StringListHolder.felix;
    }

    public static String[] getFirebird() {
        return StringListHolder.firebird;
    }

    public static String[] getFreeMarker() {
        return StringListHolder.freeMarker;
    }

    public static String[] getGit() {
        return StringListHolder.git;
    }

    public static String[] getGrails() {
        return StringListHolder.grails;
    }

    public static String[] getGroovy() {
        return StringListHolder.groovy;
    }

    public static String[] getHibernate() {
        return StringListHolder.hibernate;
    }

    public static String[] getHtml() {
        return StringListHolder.html;
    }

    public static String[] getHtml5() {
        return StringListHolder.html5;
    }

    public static String[] getInformix() {
        return StringListHolder.informix;
    }

    public static String[] getIBatis() {
        return StringListHolder.iBatis;
    }

    public static String[] getIos() {
        return StringListHolder.ios;
    }

    public static String[] getJ2ee() {
        return StringListHolder.j2ee;
    }

    public static String[] getJava() {
        return StringListHolder.java;
    }

    public static String[] getJavaEe() {
        return StringListHolder.javaEe;
    }

    public static String[] getJavaScript() {
        return StringListHolder.javaScript;
    }

    public static String[] getJavaSe() {
        return StringListHolder.javaSe;
    }

    public static String[] getJavaWebTechnologies() {
        return StringListHolder.javaWebTechnologies;
    }

    public static String[] getJBoss() {
        return StringListHolder.jBoss;
    }

    public static String[] getJdbc() {
        return StringListHolder.jdbc;
    }

    public static String[] getJms() {
        return StringListHolder.jms;
    }

    public static String[] getJQuery() {
        return StringListHolder.jQuery;
    }

    public static String[] getJsFrameworks() {
        return StringListHolder.jsFrameworks;
    }

    public static String[] getJson() {
        return StringListHolder.json;
    }

    public static String[] getJsp() {
        return StringListHolder.jsp;
    }

    public static String[] getJstl() {
        return StringListHolder.jstl;
    }

    public static String[] getJunit() {
        return StringListHolder.junit;
    }

    public static String[] getLinux() {
        return StringListHolder.linux;
    }

    public static String[] getMaven() {
        return StringListHolder.maven;
    }

    public static String[] getMobileDevelopment() {
        return StringListHolder.mobileDevelopment;
    }

    public static String[] getMongoDb() {
        return StringListHolder.mongoDb;
    }

    public static String[] getMsSqlServer() {
        return StringListHolder.msSqlServer;
    }

    public static String[] getMultithreading() {
        return StringListHolder.multithreading;
    }

    public static String[] getMySql() {
        return StringListHolder.mySql;
    }

    public static String[] getOop() {
        return StringListHolder.oop;
    }

    public static String[] getOracle() {
        return StringListHolder.oracle;
    }

    public static String[] getPascal() {
        return StringListHolder.pascal;
    }

    public static String[] getPatterns() {
        return StringListHolder.patterns;
    }

    public static String[] getPerl() {
        return StringListHolder.perl;
    }

    public static String[] getPhp() {
        return StringListHolder.php;
    }

    public static String[] getPlSql() {
        return StringListHolder.plSql;
    }

    public static String[] getPostgreSql() {
        return StringListHolder.postgreSql;
    }

    public static String[] getProposals() {
        return StringListHolder.proposals;
    }

    public static String[] getPython() {
        return StringListHolder.python;
    }

    public static String[] getQt() {
        return StringListHolder.qt;
    }

    public static String[] getRuby() {
        return StringListHolder.ruby;
    }

    public static String[] getScrum() {
        return StringListHolder.scrum;
    }

    public static String[] getSelenium() {
        return StringListHolder.selenium;
    }

    public static String[] getServlets() {
        return StringListHolder.servlets;
    }

    public static String[] getSling() {
        return StringListHolder.sling;
    }

    public static String[] getSoa() {
        return StringListHolder.soa;
    }

    public static String[] getSpring() {
        return StringListHolder.spring;
    }

    public static String[] getSpringIoc() {
        return StringListHolder.springIoc;
    }

    public static String[] getSpringMvc() {
        return StringListHolder.springMvc;
    }

    public static String[] getSql() {
        return StringListHolder.sql;
    }

    public static String[] getSwing() {
        return StringListHolder.swing;
    }

    public static String[] getTomcat() {
        return StringListHolder.tomcat;
    }

    public static String[] getUml() {
        return StringListHolder.uml;
    }

    public static String[] getUnixShellScripting() {
        return StringListHolder.unixShellScripting;
    }

    public static String[] getWebDevelopment() {
        return StringListHolder.webDevelopment;
    }

    public static String[] getWeblogic() {
        return StringListHolder.weblogic;
    }

    public static String[] getWebServices() {
        return StringListHolder.webServices;
    }

    public static String[] getWinApi() {
        return StringListHolder.winApi;
    }

    public static String[] getWindows() {
        return StringListHolder.windows;
    }

    public static String[] getWinForms() {
        return StringListHolder.winForms;
    }

    public static String[] getWsdl() {
        return StringListHolder.wsdl;
    }

    public static String[] getXhtml() {
        return StringListHolder.xhtml;
    }

    public static String[] getXml() {
        return StringListHolder.xml;
    }

    private static class StringListHolder {

        public static String[] actionScript = {
                "What is the difference between _root and _level0?"
//                _level0 : references the main Timeline of all swf.
//                _root : references the main Timeline in the level which loaded. Which means if you don’t have SWF within a SWF then _root and _level0 are the same. Otherwise _root is timeline for the main SWF file vs. _root is the timeline in the current level.
        };

        public static String[] ajax = {
                "What is AJAX and what problem does it solve?/Що таке AJAX і які задачі він вирішує?",
                /*What is AJAX and what problem does it solve?
                Ajax: It is a short for Asynchronous JavaScript and XML. It solves the problem of unnecessary data transfers and allows asynchronous processing and avoids unnecessary processing to be done by server.
                What is AJAX and what problem does it solve?
                Answer
                Ajax is a set of client side technologies that allows asynchronous communication between client and web server. In synchronous communication, complete round trip happens with each request/response action event when small data of the page to be refreshed. Ajax has solved this problem of posting entire information every time through asynchronous communication.
                XmlHttpRequest is the basic fundamental behind Ajax. This allows browser to communicate with server without making post backs.*/
                "What are the benefits of AJAX over Java applet?",
                "What is the disadvantage of AJAX?",
//                Data is stored at the client side so crucial and confidential data should not be stored to avoid any kind of security issues. For example it will be wrong to find password on client machine in html code.
//                Search engines would not be able to index an AJAX application.
//                The server information can not be accessed within AJAX.
//                AJAX is not well integrated with any browser.
//                ActiveX requests are enabled only in IE 5 and IE6
//                Data of all requests is URL-encoded, which increases the size of the request.
                "Who’s Using Ajax ?",
//
        };

        public static String[] android = {
                "What is Android?/Що таке Android?",
//                It is an open-sourced operating system that is used primarily on mobile devices, such as cell phones and tablets. It is a Linux kernel-based system that’s been equipped with rich components that allows developers to create and run apps that can perform both basic and advanced functions.
                "What Is the Google Android SDK?",
//                The Google Android SDK is a toolset that developers need in order to write apps on Android enabled devices. It contains a graphical interface that emulates an Android driven handheld environment, allowing them to test and debug their codes.
                "What is the Android Architecture?",
//                Android Architecture is made up of 4 key components:
//                - Linux Kernel
//                - Libraries
//                - Android Framework
//                - Android Applications
                "Describe the Android Framework.",
//                The Android Framework is an important aspect of the Android Architecture. Here you can find all the classes and methods that developers would need in order to write applications on the Android environment.
        };

        public static String[] ant = {
                "Explain the concepts and capabilities of ANT.",
                "Explain how to start to use Ant and provide a \"Hello World\" ant script."
//                Before start using ant, we should be clear about the project name and the .java files and most importantly, the path where the .class files are to be placed.
//
//                For example, we want the application HelloWorld to be used with ant. The Java source files are in a subdirectory called Dirhelloworld, and the .class files are to put into a sub directory called Helloworldclassfiles.
//
//                1. The build file by name build.xml is to be written. The script is as follows
//
//                <project name=”HelloWorld” default=”compiler” basedir=”.”>
//        <target name=”compiler”>
//        <mkdir dir = “Helloworldclassfiles”>
//        <javac srcdir=”Dirhelloworld” destdir=”Helloworldclassfiles”>
//        </target>
//        </project>
//
//                2. Now run the ant script to perform the compilation:
//
//        C :\> ant
//        Buildfile: build.xml
//
//        and see the results in the extra files and directory created:
//
//        c:\>dir Dirhelloworld
//        c:\>dir Helloworldclassfiles
//
//        All the .java files are in Dirhelloworld directory and all the corresponding .class are in Helloworldclassfiles directory.
//
//        Note: mkdir command is to be used in MS-DOS and mk dir command is to be used in UNIX/Linux
//
//        Dir command is to be used in MS-DOS and ls command is to be used in UNIX /Linux

        };

        public static String[] apacheAxis = {
                "What are the features of web services?"
        };

        public static String[] architecture = {
                "What do you think\n" +
                        "the best way for software to be architected?/Який, на твою думку, найкращий спосіб створювати архітектуру?",
                "who in the \"community\" they follow and admire for their architectural ability and why?"
        };

        public static String[] autoIt = {
                "Software Test Tools - AUTOIT"
//                Kind of Tool
//                Windows automation language (freeware)
//                Organization HiddenSoft
//                http://www.hiddensoft.com/AutoIt/
//        Software Description
//        AutoIt is a simple tool that can simulate key presses, mouse movements and window commands (maximize, minimize, wait for, etc.) in order to automate any windows based task (or even windowed DOS tasks).
//        There is also an ActiveX control version of AutoIt called AutoItX. This is a stand alone control that can be used to great effect under other scripting languages such as WSH/VBScript.
//        A pure DLL version of AutoIt called AutoItDLL is also available for adding AutoIt functionality to your own programs and scripts. It includes full function documentation.
//                Platforms Windows
        };

        public static String[] bash = {
                "What is shell scripting?"
//                Shell scripting is used to program command line of an operating system. Shell Scripting is also used to program the shell which is the base for any operating system. Shell scripts often refer to programming UNIX. Shell scripting is mostly used to program operating systems of windows, UNIX, Apple, etc. Also this script is used by companies to develop their own operating system with their own features.
        };

        public static String[] c = {
                "What is C language?"
//                The C programming language is a standardized programming language
//                developed in the early 1970s by Ken Thompson and Dennis Ritchie for
//        use on the UNIX operating system. It has since spread to many other
//        operating systems, and is one of the most widely used programming
//        languages. C is prized for its efficiency, and is the most popular
//        programming language for writing system software, though it is also
//        used for writing applications.
        };

        public static String[] collections = {
                "What is difference between ArrayList and vector?/Яка різниця між ArrayList та вектором?"
//                1) Synchronization - ArrayList is not thread-safe whereas Vector is thread-safe. In Vector class each method like add(), get(int i) is surrounded with a synchronized block and thus making Vector class thread-safe.
//        2) Data growth - Internally, both the ArrayList and Vector hold onto their contents using an Array. When an element is inserted into an ArrayList or a Vector, the object will need to expand its internal array if it runs out of room. A Vector defaults to doubling the size of its array, while the ArrayList increases its array size by 50 percent.
        };

        public static String[] concurrency = {
                "You have thread T1, T2 and T3, how will you ensure that thread T2 run after T1 and thread T3 run after T2?/Є потоки T1, T2 і T3, як ти зробиш, щоб T2 запустився після T1,  а T3 - після T2?"
//                join
        };

        public static String[] cPlusPlus = {
                "Difference between stack memory and heap memory?/Різниця між stack memory і heap memory?",
//                Stack = region of memory for temporaries
//        Stack pointer pushed on function entry
//        Popped on function exit
//        Stack data: new every time
//        stack is used for local variables
//        Heap = distinct region of memory for persistent objects
//        Allocate persistent data on heap with new keyword
//        Dynamically allocated memory (heap)exists until it is released either explicitly by the programmer
//        C/C++ ? explicitly managed
                "basic data structures"
//
        };

        public static String[] cq5 = {
                "What is CQ5 ? Give some points about CQ5"
//                Adobe Communique 5, or CQ5, is a java based large-scale web content management system. It combines web content management, digital asset management, and social collaboration to deliver a solution that allows to manage incredible amounts of information, multiple internal and external websites, a myriad of media assets, and detailed workflow.
        };

        public static String[] cryptography = {
                "What is a Block Cipher?/Що таке Block Cipher?",
//                A block cipher transforms a fixed-length block of plaintext data into a block of ciphertext data of the same length. This transformation takes place under the action of a user-provided secret key. Decryption is performed by applying the reverse transformation to the ciphertext block using the same secret key. The fixed length is called the block size, and for many block ciphers, the block size is 64 bits.
                "What is an Iterated Block Cipher? ",
//                An iterated block cipher is one that encrypts a plaintext block by a process that has several rounds. In each round, the same transformation or round function is applied to the data using a subkey. The set of subkeys are usually derived from the user-provided secret key by a key schedule.
        };

        public static String[] crystalReport = {
                "Is it possible to join more than one universe in Business ObjectsBOE XI? If its so Please explain how is that possible?",
                "What is Crystal Report? ",
//                Crystal report is a report generation tool. Generally have interface with VB6. Crystal report basically generates dynamic data. You can format the data in whichever way you feel like.
        };

        public static String[] cSharp = {
                "What are namespaces, and how they are used?/Що таке namespaces, і як вони використовуються?",
//                Namespaces are used to organize classes within the .NET Framework. They dictate the logical structure of the code. They are analogous to Java packages, with the key difference being Java packages define the physical layout of source files (directory structure) while .NET namespaces do not. However, many developers follow this approach and organize their C# source files in directories that correlate with namespaces. The .NET Framework has namespaces defined for its many classes, such as System.Xml–these are utilized via the using statement. Namespaces are assigned to classes via the namespace keyword.
                "What is a constructor?"
        };

        public static String[] css = {
                "What is CSS?",
                "What are Cascading Style Sheets?/Що таке Cascading Style Sheets?",
//                A Cascading Style Sheet (CSS) is a list of statements (also known as rules) that can assign various rendering properties to HTML elements. Style rules can be specified for a single element occurrence, multiple elements, an entire document, or even multiple documents at once. It is possible to specify many different rules for an element in different locations using different methods. All these rules are collected and merged (known as a "cascading" of styles) when the document is rendered to form a single style rule for each element.
                "How do I center block-elements with CSS1? ",
//                There are two ways of centering block level elements:
//
//                1. By setting the properties margin-left and margin-right to auto and width to some explicit value:
//
//        BODY {width: 30em; background: cyan;}
//        P {width: 22em; margin-left: auto; margin-right: auto}
//
//        In this case, the left and right margins will each be four ems wide, since they equally split up the eight ems left over from (30em - 22em). Note that it was not necessary to set an explicit width for the BODY element; it was done here to keep the math clean.
//
//        Another example:
//
//        TABLE {margin-left: auto; margin-right: auto; width: 400px;}
//        In most legacy browsers, a table's width is by default determined by its content. In CSS-conformant browsers, the complete width of any element (including tables) defaults to the full width of its parent element's content area. As browser become more conformant, authors will need to be aware of the potential impact on their designs.
                "If background and color should always be set together, why do they exist as separate properties?",
//                There are several reasons for this. First, style sheets become more legible -- both for humans and machines. The background property is already the most complex property in CSS1 and combining it with color would make it even more complex. Second, color inherits, but background doesn't and this would be a source of confusion.
                "What is class?",
//                Class is a group of 1) instances of the same element to which an unique style can be attached or 2) instances of different elements to which the same style can be attached.
//                1) The rule P {color: red} will display red text in all paragraphs. By classifying the selector P different style can be attached to each class allowing the display of some paragraphs in one style and some other paragraphs in another style.
//                2) A class can also be specified without associating a specific element to it and then attached to any element which is to be styled in accordance with it's declaration. All elements to which a specific class is attached will have the same style.
//        To classify an element add a period to the selector followed by an unique name. The name can contain characters a-z, A-Z, digits 0-9, period, hyphen, escaped characters, Unicode characters 161-255, as well as any Unicode character as a numeric code, however, they cannot start with a dash or a digit. (Note: in HTML the value of the CLASS attribute can contain more characters). (Note: text between /* and */ are my comments).
//        CSS
//        P.name1 {color: red} /* one class of P selector */
//        P.name2 {color: blue} /* another class of P selector */
//        .name3 {color: green} /* can be attached to any element */
//        HTML
//                <P class=name1>This paragraph will be red</P>
//        <P class=name2>This paragraph will be blue</P>
//        <P class=name3>This paragraph will be green</P>
//        <LI class=name3>This list item will be green</LI>
//        It is a good practice to name classes according to their function than their appearance; e.g. P.fotnote and not P.green. In CSS1 only one class can be attached to a selector. CSS2 allows attaching more classes, e.g.:
//        P.name1.name2.name3 {declaration} <P class="name1 name2 name2">This paragraph has three classes attached</P>
                "What is grouping ?",
//                Grouping is gathering (1) into a comma separated list two or more selectors that share the same style or (2) into a semicolon separated list two or more declarations that are attached to the same selector (2).
//
//                1. The selectors LI, P with class name .first and class .footnote share the same style, e.g.:
//        LI {font-style: italic}
//        P.first {font-style: italic}
//        .footnote {font-style: italic}
//
//        To reduce the size of style sheets and also save some typing time they can all be grouped in one list.
//                LI, P.first, .footnote {font-style: italic}
//
//        2. The declarations {font-style: italic} and {color: red} can be attached to one selector, e.g.:
//        H2 {font-style: italic}
//        H2 {color: red}
//        and can also be grouped into one list:
//        H2 {font-style: italic; color: red}
                "What is external Style Sheet? How to link? ",
//External Style Sheet is a template/document/file containing style information which can be linked with any number of HTML documents. This is a very convenient way of formatting the entire site as well as restyling it by editing just one file. The file is linked with HTML documents via the LINK element inside the HEAD element. Files containing style information must have extension .css, e.g. style.css. <HEAD> <LINK REL=STYLESHEET HREF="style.css" TYPE="text/css"> </HEAD>
        };

        public static String[] db = {
                "What is SQL?/Що таке SQL?",
//                SQL stands for 'Structured Query Language'.
                "What is SELECT statement?",
                "How can you compare a part of the name rather than the entire name?",
                "What did you use to connect perl to database?"
        };

        public static String[] debugging = {
                "Suppose you are troubleshooting a bug in a Windows application deployed in the field to several hundred users on identical hardware/OS configurations, and has been stable until a recent upgrade was rolled out a week ago.  Now some users are reporting that the app unexpectedly exits without warning or reporting an error when working in a particular area.\n" +
                        "Describe how you would go about solving this problem.\n" +
                        "What feedback, would you give the developers responsible for the app's design?",
                "When trying to send a SMS from a mobile if it fails? How do you debug or troubleshoot this problem?/Намагаєшся відіслати смс, не вдається. Як ти розберешся в цій проблемі?",
//                1. Please double-check the phone number entered for any miskeyed numbers.
//
//        2. Is your phone within service range?
//
//                3. If you have a strong signal, does your cell phone service plan include SMS text messaging? Not all cell phone plans include text messaging or you may have opted-out of that service option, so you may need to contact your service provider to add text messaging service to your plan.
//
//        4. You may not have a compatible texting plan.
//
//                5. Due to mergers between wireless carriers, be sure to select the working option in the drop down menu of choices. For example, if you do not receive messages when AT&T is selected, then try the option listed as AT&T (Legacy).
//
//                6. Have you set up a personal firewall on your mobile device to block unknown senders of messages?
//
//                7. Some wireless providers will not deliver text messages if your cell phone bill is not paid in full. If you have payments outstanding, you may be able to receive phone calls, but not text messages until your account is in good standing.
//
//                8. Try sending the message from different mobile.
//
//        9. Remove the Current SIM and try with Another SIM
//
//        10. Try to send message from Different service Provider.
                "difference between release build and debug build. Did you hear about memory leaks? how do they occur?",
//                i dunno about release build an debug build but memory leaks are something like the memory locations that are not referred that is for example if a pointer is assigned an memory but after it is changed to some other reference then the previous memory that the pointer being referred is lost but not freed from the memory this is called memory leak.
//                A release build would generally have symbols stripped off and log levels are generally low.
                "A program has a bug. How would you debug it?",
        };

        public static String[] delphi = {
                "What are the different types of pointers used in Delphi?",
//                - There are typed pointers types that are being provided by Delphi like PChar and PExtended.

//                - These points work with the Inc and Dec functions and don’t have any issue with the use of it.
//
//        - They can increment the Pint64 pointer type and add the SizeOf(Int64) bytes at the pointer address location.
//
//                - This way it allows the pointing of the pointer to point to the next memory location in the memory.
//
//        - There are generic pointers that are used to point to anything and very useful in case of dynamic memory allocation.
        };

        public static String[] delphiActiveX = {
                "How to save images or make copy of a database with Delphi?"
        };

        public static String[] delphiApi = {
                "What is Delphi?"
        };

        public static String[] delphiCom = {
                "What are the different types of pointers used in Delphi?"
        };

        public static String[] delphiComPlus = {
                "How to Select a cell in a DBGrid ?"
        };

        public static String[] delphiDCom = {
                "How to Test IDispatch Descendants"
        };

        public static String[] delphiOle = {
                "What is the default extension of file when we create user components?"
        };

        public static String[] delphiTcp = {
                "What should I give to Windows API functions that want a hWnd?"
        };

        public static String[] delphiUdpSockets = {
                "What is the target load order?"
        };

        public static String[] eclipse = {
                "What is an IDE?",
//                An IDE or Integrated Development Environment is a software program that is designed to help programmers and developers build software.
        };

        public static String[] ejb = {
                "Which of the beans available in EJB 3 are only called by clients?"
//                Session  and Singleton (EJB 3.1) beans are the ones who encapsulate the business logic which is why it is the only bean which is called by clients. Other beans like MDB and Entity beans are called by session and singleton beans to complete the business requirement.
        };

        public static String[] extJs = {
                "Why we need javascript Library?"
//                Javascript is an awesome language. It’s super flexible.Browsers are the modern UI paradigm.
//        The javascript Libraries now must provide a rich set of UI Widgets.
        };

        public static String[] felix = {
                "When I update my bundle, why are my bundle's old classes still being used?",
//                Updating a bundle does not necessarily cause the new classes to be used immediately, it depends on two factors:
//        If the classes are from a private package or an exported package.
//        If the classes are from an exported package, whether or not they are being used by another bundle.
//        Regarding (1), if the classes come from a private package (i.e., it is not exported), then the new classes will become available immediately. However, if they are from an exported package, then their visibility depends on whether any other bundles are using the exported packages.
//        If no other bundles are using the exported packages, then the new classes will become available immediately since the old version of the classes are no longer needed. On the other hand, if any other bundles are using the exported packages, then the new classes will not become available immediately since the old version is still required by any dependent bundles. In this case, the new classes will not be made available until PackageAdmin.refreshPackages() is called (this can be invoked in the Felix shell using the refresh command).
//        There is one partial exception to this latter case, it occurs when the exporting bundle does not also import its own exported packages (see "Should a bundle import its own exported packages?" below for more information on this topic). In this case, the new classes become immediately accessible to the updated exporting bundle, but not to the dependent bundles; the dependent bundles continue to see the old version of the classes. This situation generally requires PackageAdmin.refreshPackages() to be invoked to bring the bundles back to a useful state.
//        This is the normal update process as defined by the OSGi specification. Updating a bundle is a two-step process, where older versions of exported packages are kept around until explicitly refreshed. This is done to reduce disruption when performing several updates.
        };

        public static String[] firebird = {
                "How to activate all indexes in Firebird?"
//                If you run Firebird 1.x which doesn't have EXECUTE BLOCK, you can run the following query:
//
//                select 'ALTER INDEX '||rdb$index_name ||' ACTIVE;'
//                from rdb$indices
//                where rdb$system_flag is not null and rdb$system_flag = 0
        };

        public static String[] freeMarker = {
                "What is FreeMarker?"
        };

        public static String[] git = {
                "How do I clone a local Git Repository?",
//                This worked for me:
//                git clone file:////<host>/<share>/<path>
//        For example, if your main machine has the IP 192.168.10.51 and the computer name main, and it has a share named code which itself is a git repository, the both of the following commands should work equally:
//        git clone file:////main/code
//        git clone file:////192.168.10.51/code
        };

        public static String[] grails = {
                "I have a parameter in my Config.groovy file named layer1.prop1. How can I access this in a controller? How can I access this in a service?",
//                In a controller, I can inject grailsApplication via def grailsApplication and access this variable via grailsApplication.config.layer1.prop.
//                Anywhere else, I can use the ConfigurationHolder and access it via ConfigurationHolder.config.layer1.prop1
                "How do I edit the web.xml file of my grails application?",
//                First, I need to generate the template files via grails install-templates. The web.xml template will be under src/templates/war directory.
//                Alternatively, I could also create a plugin and use the doWithWebDescriptor method to add or remove nodes from my web.xml file.
        };

        public static String[] groovy = {
                "What is Groovy?",
//                Groovy is a powerful high level language for the Java platform which compiles down to Java bytecode.
//                Think of it as a Ruby or Python like language that is tightly integrated with the Java platform – allowing you the same powerful and concise coding syntax as Ruby or Pyton but allowing you to stay on the JVM and protect your investment in J2SE, J2EE and all the plethora of great useful Java code out there.
                "Why Groovy? Why don’t you just use Jython, JRuby, bsh, rhino, pnuts, …",
//                Firstly ports of existing languages like Python, Ruby, Smalltalk and JavaScript to the JVM are a good thing and we welcome them. If you already use and/or are fond of these languages please be our guests to use the Java-port of them.One of the main design goals of Groovy is to be a scripting language for Java developers to use. So we wanted to reuse both Java’s semantics and the whole set of J2SE APIs rather than introduce a port of a different language with different semantics and APIs to learn and implement/maintain.
//        e.g. in Groovy, java.lang.Object is the root of the object hierarchy, Object.equals(), Object.hashCode() and Comparable are used for comparions and lookups of objects, that java.util.List and java.util.Map are used for collections, Java Beans are fully supported and that Java and Groovy classes are interchangable inside the
//        VM. Groovy is built on top of the J2SE APIs, rather than having 2 parallel platforms etc.
//        In other words we wanted the Groovy language to be very easy to pick up if you’re already a Java developer and for there to be a very small number of new APIs to learn. By this statement we’re not implying that Python / Ruby / JavaScript are hard to learn per se – its just there’s more to know, things are more different and there’s more APIs to learn
//        Think of Groovy as a Ruby or Python like language that is tightly integrated with the Java platform (as opposed to the Unix/Posix command shell and C-libraries) – allowing you the same powerful and concise coding syntax as Ruby or Pyton but allowing you to stay on the JVM and protect your investment in J2SE, J2EE and all the plethora of great useful Java code out there without any adapter layers or parallel API sets etc. There is a more detailed set of comparisio ther languages here
        };

        public static String[] hibernate = {
                "What is ORM?",
//                ORM stands for object/relational mapping. ORM is the automated persistence of objects in a Java application to the tables in a relational database.
                "What does ORM consists of?",
                "What’s Hibernate?",
//                Hibernate is a popular framework of Java which allows an efficient Object Relational mapping using configuration files in XML format. After java objects mapping to database tables, database is used and handled using Java objects without writing complex database queries.
                "How properties of a class are mapped to the columns of a database table in Hibernate?",
//                Mappings between class properties and table columns are specified in XML file as in the below example:
                "Difference between get and load in Hibernate?",
//                get vs load is one of the most frequently asked Hibernate Interview question, since correct understanding of both get() and load() is require to effectively using Hibernate. Main difference between get and load is that, get will hit the database if object is not found in the cache and returned completely initialized object, which may involve several database call while load() method can return proxy, if object is not found in cache and only hit database if any method other than getId() is called. This can save lot of performance in some cases. You can also see difference between get and load in Hibernate for more differences and detailed discussion on this question.
                "What are the ORM levels ?",
//                The ORM levels are:
//                Pure relational (stored procedure.)
//                Light objects mapping (JDBC)
//                Medium object mapping
//                Full object Mapping (composition,inheritance, polymorphism, persistence by reachability)
        };

        public static String[] html = {
                "How do I indent the first line in my paragraphs?",
                "How do I indent a lot of text?",
//                Again, there is no reliable way to do this. Netscape will indent text inside a <BLOCKQUOTE>, but other browsers don't have to do this. These could show the text in italics, or perhaps with quotation marks around the text. This could come out very strange.
//        An alternative is to use <DL> without <DT> and <DD>, which is invalid HTML, but several browsers work around this error by indenting the text inside it. This is not guaranteed to work.
//
//        If you are willing to use tables for layout purposes, there is another option. Create a one-cell table, as follows:
//
//        <CENTER>
//        <TABLE width="805px">
//        <TR><TD><DIV align=left>
//        <!-- The text goes here -->
//        </DIV>
//        </TD></TR>
//        </TABLE>
//        </CENTER>
//
//        A drawback to this solution is that very long blocks inside a table may take a while to download and may not appear until the entire table has been downloaded. Another drawback is that it may force users to resize their viewing window after they have become accustomed to their preferred settings.
                "Can I put markup in ALT text?",
//                No. Character entities (&copy;, &#nnn; and such) are permitted, though.
//        If you want to know how to write good ALT texts without markup, please see Alan Flavell's essay on choosing ALT texts.
                "How do I include one file in another?",
//                Use server-side includes, if your server supports them. Ask your Webmaster if this is the case, and if so, what the exact syntax is for your server.
//        Since server-side includes make the document slower, they are not always desirable. If your documents only have a static footer, which doesn't change every day, you might be better off by using an editor which can insert files in the current document, or a preprocessor. The C preprocessor can do this, but there are also several HTML-specific preprocessors available.
                "How do I get scrolling text in the status bar?",
//                Check any page which has this feature, and copy the script from the source.
//                This script has two big problems. One, usually it uses the decrement operator (c--) at some ball. The "--" sequence in a comment actually closes it on some browsers, so your code may "leak" on those browsers. The same goes for ">".
//        Second, keep in mind that many people consider this even worse than <BLINK>, and that it also suppresses the status information which normally appears there. It prevents people from knowing where a link goes to.
                "How do I hide my source?",
//                You can't. The source is necessary for the browser to display your document. You have to send the complete, unencrypted source to the browser. Even if a particular browser doesn't have a "View source" option, there are many that do, and you can always retrieve the document by hand (using telnet) to get its source. Or check the browser's cache.
//                You can of course put a few hundred empty lines above the actual source, then newbies who don't see the scrollbars will think there is nothing there.
                "How can I make a custom rule, or a list with custom bullets?",
//                There was a proposal in the now-expired HTML 3 draft to handle exactly this: just add SRC to the <HR> or <UL> tag, indicating where the image can be found. But until this is more widely supported, you have to use <IMG> for the rule, with a lot of "--" characters as ALT text for text browsers, and using a <DL> with only <DD> tags for each item. Make sure you use ALIGN for the image, which should go at the beginning of the item, of course. This isn't as beautiful as a "real" list.
//                An alternative is using a two column table, with the bullets in the left column, and the text in the right. But this won't work well on non-table supporting browsers.
        };

        public static String[] html5 = {
                "What's new HTML 5 DocType and Charset?",
//                As HTML 5 is now not a subset of SGML, its DocType is simplified as follows:
//        <!doctype html>
//        And HTML 5 uses UTF-8 encoding as follows:
//        <meta charset="UTF-8">
        };

        public static String[] informix = {
                "What are the uses of key value locking in Informix?"
//                The database server uses a concept called key-value locking to lock the deleted row. When the database server deletes a row, key values in the indexes for the table are not removed immediately. Instead, each key value is marked as deleted, and a lock is placed on the key value. One of the most important uses for key-value locking is to assure that a unique key remains unique through the end of the transaction that deleted it.
//        Without this protection mechanism, user A might delete a unique key within a transaction, and user B might insert a row with the same key before the transaction commits. This scenario makes rollback by user A impossible. Key-value locking prevents user B from inserting the row until the end of user A's transaction.
        };

        public static String[] iBatis = {
                "What is iBATIS?"
        };

        public static String[] ios = {
                "How would you create your own custom view?/Як ти створиш кастомний view?"
//                By Subclassing the UIView class.
        };

        public static String[] j2ee = {
                "What makes J2EE suitable for distributed multitiered Applications?"
        };

        public static String[] java = {
                "What is immutable object? Can you write immutable object?/Що таке immutable object? Як його створити?",
//                Immutable classes are Java classes whose objects can not be modified once created. Any modification in Immutable object result in new object. For example is String is immutable in Java. Mostly Immutable are also final in Java, in order to prevent sub class from overriding methods in Java which can compromise Immutability. You can achieve same functionality by making member as non final but private and not modifying them except in constructor.
                "Does all property of immutable object needs to be final?",
                "What is the difference between creating String as new() and literal?",
//                When we create string with new() Operator, it’s created in heap and not added into string pool while String created using literal are created in String pool itself which exists in PermGen area of heap.
//                String s = new String("Test");
//        does not  put the object in String pool , we need to call String.intern() method which is used to put  them into String pool explicitly. its only when you create String object as String literal e.g. String s = "Test" Java automatically put that into String pool.
                "How does substring () inside String works?",
//        “Substring creates new object out of source string by taking a portion of original string”
                "What does the static keyword mean, and where can it be used?",
//                static can be used in four ways:
//        static variables are shared by the entire class, not a specific instance (unlike normal member variables)
//        static methods are also shared by the entire class
//        static classes are inner classes that aren’t tied to their enclosing classes
//        static can be used around a block of code in a class to specify code that runs when the virtual machine is first started up, before instances of the class are created.
                "How do you deal with dependency issues?",
//                It can refer to solving the dependency injection problem
//It can also refer to project dependencies — using external, third-party libraries. Tools like Maven and Gradle help manage them.
                "You want to create a simple class that just has three member variables. Tell me how you’d do this.",
//                experienced programmer will recognize that it’s necessary to know how to correctly override the hashCode() and equals() methods (using, for example, EqualsBuilder and HashCodeBuilder, in the Apache Commons library).
        };

        public static String[] javaEe = {
                "What is the flaw with the Stack class?/В чому проблема класу Stack?",
//                One problem is that Stack is a class, not an interface. This diverges from the design of the collection framework, where your noun is typically represented as an interface (e.g., List, Tree, Set, etc.), and there are specific implementations (e.g., ArrayList, LinkedList). If Java could avoid backward compatibility, then a more proper design would be to have a Stack interface, then VectorStack as an implementation.
//
//        A second problem is that Stack is now bound to Vector, which is generally avoided in favour of ArrayLists and the like.
//
//        A third problem is that you cannot easily provide your own stack implementation, and that stacks support very non-stack operations like getting an element from a specific index, including the potential for index exceptions. As a user, you may also have to know if the top of the stack is at index 0 or at index n. The interface also exposes implementation details such as capacity.
//
//        Of all the decisions in the original Java class library, I consider this one of the more peculiar ones. I doubt that Aggregation would have been much more expensive than inheritance.
                "what is the difference between an abstract class and an interface"
        };

        public static String[] javaScript = {
                "What are global variables? How are they declared? What are the problems with using globals?",
                "What are JavaScript types?",
//                Unlike Java or C#, JavaScript is a loosely-typed language (some call this weakly typed); this means that no type declarations are required when variables are created. Strings and numbers can be intermixed with no worries. JavaScript is smart, so it easily determines what the type should be. The types supported in JavaScript are: Number, String, Boolean, Function, Object, Null, and Undefined.
//
//        var fName = "Mary";   //Declare a String
//        var total = 100.32;    //Declare a number
//        var fName = new String; //Another way to declare a string
//        fName = "Mary";
//        var total = new Number;
//        var isIt = new Boolean;
//        var names = new Array;
//        var car = new Object;
                "What is the difference between undefined and null?",
//                The value of a variable with no value is undefined (i.e., it has not been initialized). Variables can be emptied by setting their value to null. You can test for each using the === (three equal signs) or == (two equal signs) for comparison checking. The big difference is the latter uses coercion, which can have some odd results — it returns true for a null or undefined comparison if they are either.
//
//        if (nullExample === null) { // executes this block only if null }
//            if (undExample ===Undefined) { // executes this block only if Undefined }
//                if (bothExampe == null) { // executes this block if Undefined or null }
//                    You can be more exact with a comparison by using the typeof to return an object’s type.
//
//                    If (typeof variable ==="undefined")  { // executes this block of if undefined }
                "What is JavaScript’s this keyword?",
//                JavaScript’s this keyword normally refers to the object that owns the method, but it depends on how a function is called. Basically, it points to the currently in scope object that owns where you are in the code. When working within a Web page, this usually refers to the Window object. If you are in an object created with the new keyword, the this keyword refers to the object being created. When working with event handlers, JavaScript’s this keyword will point to the object that generated the event.
                "What is event bubbling?",
//                Event bubbling describes the behavior of events in child and parent nodes in the Document Object Model (DOM); that is, all child node events are automatically passed to its parent nodes. The benefit of this method is speed, because the code only needs to traverse the DOM tree once. This is useful when you want to place more than one event listener on a DOM element since you can put just one listener on all of the elements, thus code simplicity and reduction. One application of this is the creation of one event listener on a page’s body element to respond to any click event that occurs within the page’s body.
                "Do you have a JavaScript framework preference? What are your thoughts on using frameworks?",
                "How are errors gracefully handled in JavaScript?",
//                Exceptions that occur at runtime can be handled via try/catch/finally blocks; this allows you to avoid those unfriendly error messages. The finally block is optional, as the bare minimum to use is try/catch. Basically, you try to run code (in the try block between the braces), and execution is transferred to the catch block of code when/if runtime errors occur. When the try/catch block is finally done, code execution transfers to the finally code block. This is the same way it works in other languages like C# and Java.
//        try {
//// do something
//        } catch (e) {
//// do something with the exception
//        } finally {
//// This code block always executes whether there is an exception or not.
//        }
//        You can give bonus points to any candidate who discusses the onerror event handler tied to the Window object in the browser -- this allows it to monitor all errors on a page. This allows you to properly handle code syntax errors and runtime exceptions.
        };

        public static String[] javaSe = {
                "What is the difference between an interface and abstract class?/В чому різниця між інтерфейсом та абстрактним класом?",
//                An abstract class can have instance methods that implement a default behavior. An Interface can only declare constants and instance methods, but cannot implement default behavior and all methods are implicitly abstract. An interface has all public members and no implementation. An abstract class is a class which may have the usual flavors of class members (private, protected, etc.), but has some abstract methods. An excellent comparison between interfaces and abstract classes can be found at http://mindprod.com/jgloss/interfacevsabstract.html
                "Explain polymorphism"
        };

        public static String[] javaWebTechnologies = {
                "Can we use the constructor, instead of init(), to initialize servlet?"
        };

        public static String[] jBoss = {
                "What's the difference between Hibernate and EJB 3 ? Don't you think EJB 3 is just a clone of Hibernate ?",
//                The perception of EJB3 as being a simple clone of Hibernate is primarily based on developer familiarity with Hibernate and a similarity of naming, as well as common purpose, and that Hibernate is morphing itself into an EJB3 implementation based on the work going into the specification, not the other way around.
//                EJBs are supposed to be components, in the sense that they're not just one class, but a set of classes, descriptors and usage and management contracts. All of this in order to allow a container (JBoss,
//                Weblogic, etc.) to provide services to those components, and to be able to reuse and distribute this components. This services are, among others, transactions, concurrent access control, security, instance pooling, etcetera.
//        Hibernat is "just" an ORM (Object/Relational Mapping) tool. Quick and dirty, this means you can store an object tree belonging to an class hierarchy in a relational DB without writing a single SQL query. Quite cool, IMO. But no transaction control, no instance pooling, no concurrency control, and certainly no security.
                "Which Hibernate object wraps the JDBC Connection ?",
//                The Session interface wraps a JDBC Connection. This interface is a single threaded object which represents a single unit of work with application and persistent database. It's retrieved by the SessionFactory's openSession() method
        };

        public static String[] jdbc = {
                "What is the JDBC?",
//                Java Database Connectivity (JDBC) is a standard Java API to interact with relational databases form Java. JDBC has set of classes and interfaces which can use from Java application and talk to database without learning RDBMS details and using Database Specific JDBC Drivers.
                "What are the new features added to JDBC 4.0?",
                "What are the main steps in java to make JDBC connectivity?",
//                Load the Driver: First step is to load the database specific driver which communicates with database.
//        ·          Make Connection: Next step is get connection from the database using connection object, which is used to send SQL statement also and get result back from the database.
//        ·          Get Statement object: From connection object we can get statement object which is used to query the database
//        ·          Execute the Query:Using statement object we execute the SQL or database query and get result set from the query.
//        ·          Close the connection:After getting resultset and all required operation performed the last step should be closing the database connection.
                "What is the mean of “dirty read“ in database?",
//                This kind of JDBC interview question is asked on 2 to 4 years experience Java programmer, they are expected to familiar with database transaction and isolation level etc. As the name it self convey the meaning of dirty read “read the value which may or may not be correct”. in database when one transaction is executing and changing some field value same time some another transaction comes and read the change field value before first transaction commit or rollback the value ,which cause invalid value for that field, this scenario is known as dirty read.
        };

        public static String[] jms = {
                "What is JMS?",
//                JMS is an acronym used for Java Messaging Service. It is Java's answer to creating software using asynchronous messaging. It is one of the official specifications of the J2EE technologies and is a key technology.
        };

        public static String[] jQuery = {
                "What is jQuery & its significance? Why it is so popular?/Що таке jQuery і чому він популярний?",
//                jQuery is lightweight, client side script JavaScript library file that supports all browsers.Query is a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. jQuery makes it easy to play with the DOM, add effects, and execute Ajax requests.
//
//        This helps developer to reduce lines of code while he program. For example huge code written in Java Script, can be done easily with JQuery in one or two lines as it uses pre compiled JavaScript library internally. For example To find a Div that have class xxx we can do this using custom JavaScript by looping through all DOM elements, Find Div element write if statement checking the class then write the code to manipulate cross browser.  But this can be achieved using jQuery with 2 lines of code. jQuery is a fun library to use and play.
//
//        It is so popular due to the below 10 reasons.
//
//        Cross Browser Compatibility.
//        Fast but micro Famework.The jQuery core library minified is only about 24KB in size, so it is very easily to include in any application and it is pretty fast as well.
//        Easy to learn and flexible.
//        It is well documented.
//        Reuse of plug-ins across projects .These plug ins are extendable.
//        Latest CSS Complaint.
//                Microsoft, which now includes jQuery with its MVC framework and integrated to VS2010 with intellisense support .
//                IBM, Netflix use jQuery. Nokia have adopted it. Google uses and hosts the jQuery library.
//        Easy to find support since there is a large development community and variety of plug-ins.
//        DOM manipulation with querying and chaining is Wonderful & Robust. It is simple, concise and clear enough.
//        Hence jQuery is definitely faster, easier and more productive than previous traditional JavaScript that we use, hence its so popular.
                "What is jQuery UI?",
                "What are various jQuery Features?",
                "Is jQuery replacement of Java Script?",
                "Is jQuery a library for client scripting or server scripting?",
        };

        public static String[] jsFrameworks = {
                "What is the relationship between ECMAScript, Javascript and Jscript?"
        };

        public static String[] json = {
                "What is The JSON(JavaScript Object Notation)?",
                "Who is the Father or creater of JSON?",
//                Douglas Crockford called as the Father of JSON
                "what the file extension of JSON",//.json
                "Explain Json with php",
//                Json is too much easy with php There is no installation needed to use these functions; they are part of the PHP core. nothing more need to know just only use { ,[ and create json format string and use three php function json_encode() to get JSON representation of a value, json_decode() for Decodes a JSON string, ¦json_last_error() to get the last error occurred in process.
                "Why Use JSON over XML",
//Lighter and faster than XML as on-the-wire data format
//        • JSON objects are typed while XML data is typeless
//        > JSON types: string, number, array, boolean,
//                > XML data are all string
//        • Native data form for JavaScript code
//        > Data is readily accessible as JSON objects in your JavaScript
//        code vs. XML data needed to be parsed and assigned to variables through tedious DOM APIs
//        > Retrieving values is as easy as reading from an object property in your JavaScript code
        };

        public static String[] jsp = {
                "What is a output comment?",
//                A comment that is sent to the client in the viewable page source.The JSP engine handles an output comment as uninterpreted HTML text, returning the comment in the HTML output sent to the client. You can see the comment by viewing the page source from your Web browser.
//                JSP Syntax
//                <!-- comment [ <%= expression %> ] -->
//
//        Example 1
//        <!-- This is a commnet sent to client on
//        <%= (new java.util.Date()).toLocaleString() %>
//                -->
//
//        Displays in the page source:
//        <!-- This is a commnet sent to client on January 24, 2004 -->
                "What is a Hidden Comment?",
//                A comments that documents the JSP page but is not sent to the client. The JSP engine ignores a hidden comment, and does not process any code within hidden comment tags. A hidden comment is not sent to the client, either in the displayed JSP page or the HTML page source. The hidden comment is useful when you want to hide or "comment out" part of your JSP page.
//                You can use any characters in the body of the comment except the closing --%> combination. If you need to use --%> in your comment, you can escape it by typing --%\>.
//        JSP Syntax
//        <%-- comment --%>
//
//        Examples
//                <%@ page language="java" %>
//        <html>
//        <head><title>A Hidden Comment </title></head>
//        <body>
//        <%-- This comment will not be visible to the colent in the page source --%>
//        </body>
//        </html>
                "What are the advantages of JSP over Servlet?",
//JSP is a serverside technology to make content generation a simple appear.The advantage of JSP is that they are document-centric. Servlets, on the other hand, look and act like programs. A Java Server Page can contain Java program fragments that instantiate and execute Java classes, but these occur inside an HTML template file and are primarily used to generate dynamic content. Some of the JSP functionality can be achieved on the client, using JavaScript. The power of JSP is that it is server-based and provides a framework for Web application development.
                "What is the life-cycle of JSP?",
//When a request is mapped to a JSP page for the first time, it translates the JSP page into a servlet class and compiles the class. It is this servlet that services the client requests.
//                A JSP page has seven phases in its lifecycle, as listed below in the sequence of occurrence:
//        Translation
//                Compilation
//        Loading the class
//                Instantiating the class
//                jspInit() invocation
//                          _jspService() invocation
//        jspDestroy() invocation
        };

        public static String[] jstl = {
                "What about JSTL and JavaServer Faces? ",
//                JSTL, the JavaServer Standard Tag Library, is a set of JSP tags that are designed to make it easier to develop Web applications. JavaServer Faces (JSF) is a specification for a new technology that promises to make it easier to write MVC applications, both for the Web and for the desktop.
//                The inventor of Struts, Craig McClanahan, is the specification co-lead for JavaServer Faces (JSR 127), and architect of the reference implemenation as well as Java Studio Creator. Both JSTL and JSF are complementary to Struts.
//        The mainstay of the Struts framework is the controller components, which can be used with any Java presentation technology. As new technologies become available, it is certain that new "glue" components will also appear to help these technologies work as well with Struts.
//        Struts originally came bundled with a set of custom JSP tags. Today, several extensions are available to help you use Struts with other popular presentation technologies, like XSLT and Velocity. Likewise, extensions for JSTL and JSF are now available as well.
//        The JSTL reference implementation is available through the Jakarta Taglibs site. A JSTL taglibs for Struts, Struts-El , is available and distributed with Struts beginning with the 1.1 release. The JSF specification and reference implementation is available through Sun's The JSF specification and reference implementation is available through Sun's Java ServerFaces page. An early-release JavaServer Faces taglib for Struts, Struts-Faces, is also in early release and available through the nightly build. The Struts Faces taglib is expected to work with any compliant JSF implementation, including MyFaces.
        };

        public static String[] junit = {
                "What Is JUnit?",
                "Who Should Use JUnit, Developers or Testers?",
//                I should say that JUnit is mostly used by developers. JUnit is designed for unit testing, which is really a coding process, not a testing process.
//        But many testers or QA engineers, are also required to use JUnit for unit testing. For example, I found this job title on the Internet: Lead QA Engineer - Java / J2EE / whitebox / SAP / Junit
                "What is testing?",
//                Testing is the process of checking the functionality of the application whether it is working as per requirements.
                "What is unit testing?",
//                Unit testing is the testing of single entity (class or method). Unit testing is very essential to every software company to give a quality product to their customers.
        };

        public static String[] linux = {
                "What is Linux?",
//                Linux is an operating system based on UNIX, and was first introduced by Linus Torvalds. It is based on the Linux Kernel, and can run on different hardware platforms manufactured by Intel, MIPS, HP, IBM, SPARC and Motorola. Another popular element in Linux is its mascot, a penguin figure named Tux.
                "What is the difference between UNIX and LINUX?/Яка різниця між UNIX та LINUX?",
//                Unix originally began as a propriety operating system from Bell Laboratories, which later on spawned into different commercial versions. On the other hand, Linux is free, open source and intended as a non-propriety operating system for the masses.
                "What is BASH?",
//                BASH is short for Bourne Again SHell. It was written by Steve Bourne as a replacement to the original Bourne Shell (represented by /bin/sh). It combines all the features from the original version of Bourne Shell, plus additional functions to make it easier and more convenient to use. It has since been adapted as the default shell for most systems running Linux.
                "What is GRUB",
//                Ans GNU GRUB is a Multiboot boot loader. It was derived from GRUB, the GRand Unified Bootloader,
//                which was originally designed and implemented by Erich Stefan Boleyn.
//                Briefly, a boot loader is the first software program that runs when a computer starts. It is
//                responsible for loading and transferring control to the operating system kernel software
//                (such as the Hurd or Linux). The kernel, in turn, initializes the rest of the operating
//        system (e.g. GNU)
                "Explain Linux Boot Process",
//                BIOS, MBR, GRUB, Kernel, Init, Runlevel programs
        };

        public static String[] maven = {
                "Is there a way to use the current date in the POM?",
//                Take a look at the buildnumber plugin. It can be used to generate a build date each time I do a build, as follows:
//        <plugin>
//        <groupId>org.codehaus.mojo</groupId>
//        <artifactId>maven-buildnumber-plugin</artifactId>
//        <version>0.9.4</version>
//        <configuration>
//        <format>{0,date,yyyy-MM-dd HH:mm:ss}</format>
//        <items>
//        <item>timestamp</item>
//        </items>
//        <doCheck>false</doCheck>
//        <doUpdate>false</doUpdate>
//        </configuration>
//        <executions>
//        <execution>
//        <phase>validate</phase>
//        <goals>
//        <goal>create</goal>
//        </goals>
//        </execution>
//        </executions>
//        </plugin>
                "pom.xml or settings.xml? What is the best practice configuration usage for these files?",
//                The best practice guideline between settings.xml and pom.xml is that configurations in settings.xml must be specific to the current user and that pom.xml configurations are specific to the project.
//                For example, <repositories> in pom.xml would tell all users of the project to use the <repositories> specified in the pom.xml. However, some users may prefer to use a mirror instead, so they'll put <mirrors> in their settings.xml so they can choose a faster repository server.
//        so there you go:
//        settings.xml -> user scope
//        pom.xml -> project scope
//
//        How do I indicate array types in a MOJO configuration?
//
//        <tags>
//        <tag>value1</tag>
//        <tag>value2</tag>
//        </tags>
                "How should I point a path for maven 2 to use a certain version of JDK when I have different versions of JDK installed on my PC and my JAVA_HOME already set? ",
//                If you don't want to change your system JAVA_HOME, set it in maven script instead.
                "What are the steps involved in project deployment?",
//                Check-in the code from all projects in progress into the SVN or source code repository and tag it.
//                Download the complete source code from SVN.
//                Build the application.
//                Store the build output either WAR or EAR file to a common network location.
//                Get the file from network and deploy the file to the production site.
//                Updated the documentation with date and updated version number of the application.
                "What is Maven?",
//Maven is a project management and comprehension tool. Maven provides developers a complete build lifecycle framework. Development team can automate the project's build infrastructure in almost no time as Maven uses a standard directory layout and a default build lifecycle.
                "What does it mean when you say Maven uses Convention over Configuration?",
//                Maven uses Convention over Configuration which means developers are not required to create build process themselves. Developers do not have to mention each and every configuration details.
                "What are the aspects Maven manages?",
//                Maven provides developers ways to manage following:
//                Builds
//                Documentation
//                Reporting
//                Dependencies
//                SCMs
//                Releases
//                Distribution
//                mailing list
        };

        public static String[] mobileDevelopment = {
                "What was the last thing you built that you think is really great, and why are you proud of it?",
//                Cook hopes to hear enthusiasm in the answer, and to find people who think of developing mobile software not just as a job or as a major, but as a hobby.
        };

        public static String[] mongoDb = {
                "What makes Mongodb best?",
//                Document-oriented
//                High performance
//                High availability
//                Easy scalability
//                Rich query language
        };

        public static String[] msSqlServer = {
                "CREATE TABLE",
        };

        public static String[] multithreading = {
                "What is synchronization in respect to multi-threading in Java?/Що таке синхронізація в Java?",
//                With respect to multi-threading, synchronization is the capability to control the access of multiple threads to shared resources. Without synchronization, it is possible for one Java thread to modify a shared variable while another thread is in the process of using or updating same shared variable. This usually leads to erroneous behavior or program.
                "Explain different way of using thread?",
//                A Java thread could be implemented by using Runnable interface or by extending the Thread class. The Runnable is more advantageous, when you are going for multiple inheritance.
        };

        public static String[] mySql = {
                "How do you start and stop MySQL on Windows?",
//                net start MySQL, net stop MySQL
                "How do you start MySQL on Linux?",
//                        /etc/init.d/mysql start
                "Explain the difference between mysql and mysqli interfaces in PHP?",
//                mysqli is the object-oriented version of mysql library functions.
                "What is MySQL?",
//MySQL is an open source DBMS which is built, supported and distributed by MySQL AB (now acquired by Oracle)
                "Explain advantages of MyISAM over InnoDB?",
//                Much more conservative approach to disk space management – each MyISAM table is stored in a separate file, which could be compressed then with myisamchk if needed.
//                With InnoDB the tables are stored in tablespace and not much further optimization is possible. All data except for TEXT and BLOB can occupy 8,000 bytes at most. No full text indexing is available for InnoDB. The COUNT(*)s execute slower than in MyISAM due to tablespace complexity.
        };

        public static String[] oop = {
                "What is OOP?/Що таке OOP?",
//                OOP or Object Oriented Programming comes under Procedural programming that enables programmers to create new modules without having the need to change them when a new object is created. It involves defining data within data structures and the different operations that can be performed on them. C++, Java are examples of OOP.
//                The object oriented programming is commonly known as OOP. Most of the languages are developed using OOP concept. Object-oriented programming (OOP) is a programming concept that uses "objects" to develop a system.
//                A programming object has an ability to perform actions and has attributes. It performs just like real world entities for e.g. a motor bike. A bike performs actions such as 'Start', 'Stop' etc., and it has attributes like red color, 150 cc etc. So does an Object. Actions and attributes are represented by Methods and fields or properties respectively in programming language.
//        An object hides the implementation details and exposes only the functionalities and parameters it requires to its client. Here also an object shares the same concept as that of a bike. While driving a motor bike, we are unaware of its implementation details such as how it is developed, internal working of gears etc.? We know only the functions or actions it can perform.
//                Object oriented programming uses a paradigm which utilizes the objects consisting data members and operations on the data members. An OOP is thus viewed as objects interaction. Each object is capable of sending and receiving messages, data processing to other objects.
                "What are the various elements of OOP?",
//                Class:- A class is a collection of data and the various operations that can be performed on that data.
//
//        Object- This is the basic unit that are associated with the data and methods of a class. To access any element of a class, an object is used.
//
//        Method:- describes the objects abilities. For example find_salary().
//
//        Instance:- An instance is the actual object created at run time. For example the salary of an employee John like john.find_salary(). Here, John is an instance.
//        Various elements of OOP are:
//
//        Object
//                Class
//        Method
//                Encapsulation
//        Information Hiding
//        Inheritance
//                Polymorphism
//        Class – A class is a collection of data and operations on data. Data and operations / functions / methods are placed together in a single unit, i.e., class. This feature is known as encapsulation.
//
//        Objects – A class is like a blue print of a building. An object is the building itself. Technically speaking, an object is the real entity of a specific class, which involves in real operations of an OOP application.
//
//                Inheritance: The properties of one class can be used by another class in a best way, and the class can be extended as the need may be. This feature is known as Inheritance.
                "What is a Class?",
        };

        public static String[] oracle = {
                "Explain the difference between a hot backup and a cold backup and the benefits associated with each.",
//                A hot backup is basically taking a backup of the database while it is still up and running and it must be in archive log mode. A cold backup is taking a backup of the database while it is shut down and does not require being in archive log mode. The benefit of taking a hot backup is that the database is still available for use while the backup is occurring and you can recover the database to any point in time. The benefit of taking a cold backup is that it is typically easier to administer the backup and recovery process. In addition, since you are taking cold backups the database does not require being in archive log mode and thus there will be a slight performance gain as the database is not cutting archive logs to disk.
                "You have just had to restore from backup and do not have any control files. How would you go about bringing up this database?",
//                I would create a text based backup control file, stipulating where on disk all the data files were and then issue the recover command with the using backup control file clause.
                "How do you switch from an init.ora file to a spfile?"
        };

        public static String[] pascal = {
                "How do I make EXE files with Turbo Pascal?"
//                In Turbo Pascal, in the compile menu, select COMPILE TO MEMORY. Open the menu
//                again, and it should say COMPILE TO DISK. Then select COMPILE, and it will
//                create the file XXX.EXE, where XXX is the name of your .PAS file.
        };

        public static String[] patterns = {
                "What is a software design pattern?",
//                A design pattern is a solution to a general software problem within a particular context.
//
//                Context : A recurring set of situations where the pattern applies.
//                Problem : A system of forces (goals and constraints) that occur repeatedly in this context.
//                Solution : A description of communicating objects and classes (collaboration) that can be applied to resolve those forces.
//        Design patterns capture solutions that have evolved over time as developers strive for greater flexibility in their software. Whereas class libraries are reusable source code, and components are reusable packaged objects, patterns are generic, reusable design descriptions that are customized to solve a specific problem. The study of design patterns provides a common vocabulary for communication and documentation, and it provides a framework for evolution and improvement of existing patterns.
//
//        reference books for design patterns:
//        Head First Design Patterns  (buy from Amazon.com) (Highly recommended by most of the readers)
//        Design Patterns: Elements of Reusable Object-Oriented Software  (buy from Amazon.com)
//        Design Patterns In Java  (buy from Amazon.com)
                "Why is the study of patterns important?",
//                As initial software designs are implemented and deployed, programmers often discover improvements which make the designs more adaptable to change. Design patterns capture solutions that have evolved over time as developers strive for greater flexibility in their software, and they document the solutions in a way which facilitates their reuse in other, possibly unrelated systems. Design patterns allow us to reuse the knowledge of experienced software designers.
//                Moreover, the study of design patterns provides a common vocabulary for communication and documentation, and it provides a framework for evolution and improvement of existing patterns. As an analogy, consider that during a discussion among programmers, the words “stack” and “tree” can be used freely without explanation. Software developers understand fundamental data structures such as a “stack” because these data structures are well-documented in textbooks and are taught in computer science courses. The study of design patterns will have a similar (but more profound) effect by allowing designers to say “composite pattern” or “observer pattern” in a particular design context, without having to describe all classes, relationships, and collaborations which make up the pattern. Patterns raise the level of abstraction when discussing and documenting software designs.
        };

        public static String[] perl = {
                "Difference between the variables in which chomp function work ?"
//                Scalar: It is denoted by $ symbol. Variable can be a number or a string.
//        Array: Denoted by @ symbol prefix. Arrays are indexed by numbers.
        };

        public static String[] php = {
                "What is PHP?/Що таке PHP?",
//                PHP is a web language based on scripts that allows developers to dynamically create generated web pages.
                "What does the initials of PHP stand for?",
//                PHP means PHP: Hypertext Preprocessor.
                "What is Object Oriented Programming?"
//                You should understand classes (objects are instantiated classes), abstract classes, interfaces, methods, properties,inheritance, multiple inheritance as well as why OOP is helpful as compared to procedural programming.
        };

        public static String[] plSql = {
                "What special operators does Oracle provide for dealing with NULLs?"
//                NVL - Converts a NULL to another specified value, as in: my_var := NVL (your_var, 'Hello');
// IS NULL and IS NOT NULL
        };

        public static String[] postgreSql = {
                "What are the different data types supported by PostgreSQL?",
//                Arbitrary precision numeric?s
//                2) Geometric primitives
//        3) Arrays
//        4) XML etc
//        Users can create their own indexes and make them indexed.
                "Explain about pgadmin? ",
//                Pgadmin forms a graphical front end administration tool. This feature is available under free software released under Artistic License. Pgadmin iii is the new database administration tool released under artistic license.
        };

        public static String[] proposals = {
                "Can you give an overview of the process of creating a proposal?/Можеш описати процес створення proposal?",
//                Proposals involve a myriad of strategy, planning, organization, research, and, of course, writing processes. The value of creating these standard, or boilerplate, files will multiply across subsequent proposals. With minor modifications related to the particular proposal, well-researched and professionally written standard files provide the proposal process with an immediate degree of completion, enabling management and proposal organizers more time for critical proposal analysis, creative solutions, and custom product modifications.
                "How is a request for a proposal generated?",
//When an organization requires a product and/or service from a contractor or outside vendor, it describes that need, and response requirements, in a Request for Proposal (RFP). Interested vendors who, presumably, can accommodate the RFP requirements, respond with their proposal. Within the RFP is a section typically called Terms and Conditions (T&C), which, as evidenced by the obvious title, details the exact parameters of the request and expected response. This section was, at one time, known as the "boilerplate" section. Payment schedules and other basic details were part of the section. Today, "boilerplate" can indicate almost any information or language, including images files, charts, diagrams, fonts, and styles, that can be, and often is, replicated across multiple proposals. Similarly, boilerplate is utilized in almost every industry, with the legal community among the prominent-replicated language is used in most court responses, pleadings, etc.
        };

        public static String[] python = {
                "How are arguments passed – by reference of by value?",
//                The short answer is “neither”, actually it is called “call by object” or “call by sharing”(you can check here for more info). The longer one starts with the fact that this terminology is probably not the best one to describe how Python works. In Python everything is an object and all variables hold references to objects. The values of these references are to the functions. As result you can not change the value of the reference but you can modify the object if it is mutable. Remember numbers, strings and tuples are immutable, list and dicts are mutable.
        };

        public static String[] qt = {
                "How qt differs from other mobile development platforms like android?/Чим qt відрізняється від інших платформ, наприклад android?"
//                Android is an operating system, just like Windows, OS X, Symbian, Maemo, MeeGo ...
//        Qt is an UI and application framework that allows you write applications which can be compiled for and run on several of this OSs.
        };

        public static String[] ruby = {
                "What is a class?",
                "What is an object?"
        };

        public static String[] scrum = {
                "What is Agile? What would be your 30 second Agile elevator pitch?"
        };

        public static String[] selenium = {
                "What is Selenium IDE"
        };

        public static String[] servlets = {
                "Explain the life cycle methods of a Servlet./Life cycle сервлету.",
//                The javax.servlet.Servlet interface defines the three methods known as life-cycle method.
//        public void init(ServletConfig config) throws ServletException
//        public void service( ServletRequest req, ServletResponse res) throws ServletException, IOException
//        public void destroy()
//        First the servlet is constructed, then initialized wih the init() method.
//        Any request from client are handled initially by the service() method before delegating to the doXxx() methods in the case of HttpServlet.
//        The servlet is removed from service, destroyed with the destroy() methid, then garbaged collected and finalized.
                "What is the difference between the getRequestDispatcher(String path) method of javax.servlet.ServletRequest interface and javax.servlet.ServletContext interface?",
//                The getRequestDispatcher(String path) method of javax.servlet.ServletRequest interface accepts parameter the path to the resource to be included or forwarded to, which can be relative to the request of the calling servlet. If the path begins with a "/" it is interpreted as relative to the current context root.
//        The getRequestDispatcher(String path) method of javax.servlet.ServletContext interface cannot accepts relative paths. All path must sart with a "/" and are interpreted as relative to curent context root.
                "What is the Servlet?",
//A servlet is a Java programming language class that is used to extend the capabilities of servers that host applications accessed by means of a request-	response programming model.
        };

        public static String[] sling = {
                "What is CQ5? What is a Content Management System?",
//                CQ5 is a java based content management system from adobe, previously Day CQ5.
//                1)    It is based on a content repository(i.e it uses a content repository to store the content of a website) and use JCR(java content repository) specification to access the content repository.
//                2)    It uses RESTful Apache Sling framework to map request url to the corresponding node in content repository
//        3)    it uses powerful OSGi framework internally to allow modular application development. It means  individual pieces of your application(called bundles in terms of OSGi) can be independently started and stopped. CQ5 uses Apache Felix as the OSGi container. Therefore different parts of cq5 can be independently started and stopped.
//        Coming to why a content management system is required? Some websites are very dynamic in nature, content needs to be updated frequently, so it is easier to manage the content of such websites using a CMS.
        };

        public static String[] soa = {
                "What is SOA?",
                "In SOA do we need to build systems from scratch?/В SOA: чи потрібно будувати системи з нуля?"
//                No. If you need to integrate or make an existing system as a business service, you just need to create loosely coupled wrappers which will wrap your custom systems and expose the systems functionality in generic fashion to the external world.
        };

        public static String[] spring = {
                "How do you setup LDAP Authentication using Spring Security?/Як робиться LDAP Authentication у Spring Security?",
//                application-context-security.xml
//                <s:authentication-manager erase-credentials="true">
//        <s:authentication-provider ref="ldapActiveDirectoryAuthProvider"/>
//        </s:authentication-manager>
//
//        <bean id="ldapActiveDirectoryAuthProvider" class="org.springframework.security.ldap.authentication.ad.ActiveDirectoryLdapAuthenticationProvider">
//
//        <constructor-arg value="stockmarket.com" />  //your domain
//        <constructor-arg value="ldap://stockmarket.com/" />  //ldap url
//        </bean>
                "How do you control concurrent Active session using Spring Security?",
                " What is IOC (or Dependency Injection)? ",
//                The basic concept of the Inversion of Control pattern (also known as dependency injection) is that you do not create your objects but describe how they should be created. You don't directly connect your components and services together in code but describe which services are needed by which components in a configuration file. A container (in the case of the Spring framework, the IOC container) is then responsible for hooking it all up.
//                i.e., Applying IoC, objects are given their dependencies at creation time by some external entity that coordinates each object in the system. That is, dependencies are injected into objects. So, IoC means an inversion of responsibility with regard to how an object obtains references to collaborating objects.
                "What are the different types of IOC (dependency injection) ?",
//There are three types of dependency injection: <ul>
//                <li><b>Constructor Injection</b> (e.g. Pico container, Spring etc): Dependencies are provided as constructor parameters.</li>
//        <li><b>Setter Injection</b> (e.g. Spring): Dependencies are assigned through JavaBeans properties (ex: setter methods).</li>
//        <li><b>Interface Injection </b>(e.g. Avalon): Injection is done through an interface.</li></p>
//        <em>  Note: Spring supports only Constructor and Setter Injection
        };

        public static String[] springIoc = {
                "How do you setup LDAP Authentication using Spring Security?",
        };

        public static String[] springMvc = {
                "What is spring framework? Why Java programmer should use Spring framework",
                "What is default scope of bean in Spring framework?/Який дефолтний scope біна у Spring framework?",
//        default scope of bean is Singleton
                "Does Spring singleton beans are thread-safe ?",
//                No, Spring singleton beans are not thread-safe. Singleton doesn't mean bean would be thread-safe.
                "Explain Spring MVC framework with an example ?",
//                The MVC is a standard software architecture that aims to separate business logic from presentation logic, enabling the development, testing and maintenance of both isolated . (1) The user triggers an event through the UI (click a button on the page or something).
//                (2) The controller receives the event and coordinates how things will happen on the server side, i.e. the flow goes to the objects required to perform the business rule..
        };

        public static String[] sql = {
                "In SQL, what’s the difference between an inner and outer join?",
//                an inner join will only return rows in which there is a match based on the join predicate. In this case, what that means is anytime the Employee and Location table share an Employee ID, a row will be generated in the results to show the match. Looking at the original tables, one can see that those Employee ID’s that are shared by those tables are displayed in the results. But, with a left or right outer join, the result set will retain all of the rows from either the left or right table.It will be a good idea to read up a database designing fundamentals text book.
                "In SQL, what are the differences between primary, foreign, and unique keys?",
//                The one thing that primary, unique, and foreign keys all have in common is the fact that each type of key can consist of more than just one column from a given table. In other words, foreign, primary, and unique keys are not restricted to having just one column from a given table – each type of key can cover multiple columns. Of course, the database programmer is the one who will define which columns are covered by a foreign, primary, or unique key. That is one similarity all those keys share, but there are some major differences that exist between primary, unique, and foreign keys. Let’s go over those differences. We also give a thorough explanation of why foreign keys are necessary in some situations.
                "Can a table have multiple unique, foreign, and/or primary keys?",
//                A table can have multiple unique and foreign keys. However, a table can have only one primary key.
                "What is DBMS?",
                "SQL Query to find second highest salary of Employee",
//                select MAX(Salary) from Employee WHERE Salary NOT IN (select MAX(Salary) from Employee );
                "What is the difference between JOIN and UNION?",
//                SQL JOIN allows us to “lookup” records on other table based on the given conditions between two tables. For example, if we have the department ID of each employee, then we can use this department ID of the employee table to join with the department ID of department table to lookup department names.
//                UNION operation allows us to add 2 similar data sets to create resulting data set that contains all the data from the source data sets. Union does not require any condition for joining. For example, if you have 2 employee tables with same structure, you can UNION them to create one result set that will contain all the employees from both of the tables.
//        SELECT * FROM EMP1
//        UNION
//        SELECT * FROM EMP2;
                "What is the difference between UNION and UNION ALL?",
//                UNION and UNION ALL both unify for add two structurally similar data sets, but UNION operation returns only the unique records from the resulting data set whereas UNION ALL will return all the rows, even if one or more rows are duplicated to each other.
//                In the following example, I am choosing exactly the same employee from the emp table and performing UNION and UNION ALL. Check the difference in the result.
//                SELECT * FROM EMPLOYEE WHERE ID = 5
//                UNION ALL
//                SELECT * FROM EMPLOYEE WHERE ID = 5
//                ID	MGR_ID	DEPT_ID	NAME	SAL	DOJ
//                5.0	2.0	2.0	Anno	80.0	01-Feb-2012
//                5.0	2.0	2.0	Anno	80.0	01-Feb-2012
//                SELECT * FROM EMPLOYEE WHERE ID = 5
//                UNION
//                SELECT * FROM EMPLOYEE WHERE ID = 5
//                ID	MGR_ID	DEPT_ID	NAME	SAL	DOJ
//                5.0	2.0	2.0	Anno	80.0	01-Feb-2012

        };

        public static String[] swing = {
                "What is Event-Driven-Thread (EDT) in Swing?",
//                Event-Driven-Thread or EDT is a special thread in Swing and AWT. Event-Driven Thread is used to draw graphics and listen for events in Swing. You will get a bonus point if you able to highlight that time consuming operations like connecting to database, opening a file or connecting to network should not be done on EDT thread because it could lead to freezing GUI because of blocking and time consuming nature of these operations instead they should be done on separate thread and EDT can just be used to spawn those thread on a button click or mouse click.
                "Does Swing is thread safe? What do you mean by swing is not thread-safe?",
//                Since Swing components are not thread-safe it means you can not update these components in any thread other than Event-Driven-Thread. If you do so you will get unexpected behavior. Some time interviewer will also ask what are thread-safe methods in swing which can be safely called from any thread only few like repaint() and revalidate().
        };

        public static String[] tomcat = {
                "How do you create multiple virtual hosts?",
//                If you want tomcat to accept requests for different hosts e.g., www.myhostname.com then you must 0. create ${catalina.home}/www/appBase , ${catalina.home}/www/deploy, and ${catalina.home}/conf/Catalina/www.myhostname.com
//        1. add a host entry in the server.xml file
//        <Host appBase="www/appBase" name="www.myhostname.com"/>
//                2. Create the the following file under conf/Catalina/www.myhostname.com/ROOT.xml
//        <?xml version="1.0" encoding="UTF-8"?>
//        <Context
//        path="/"
//        docBase="www/deploy/mywebapp.war"
//        reloadable="true" antiJARLocking="true">
//        </Context>
//        Add any parameters specific to this hosts webapp to this context file
//        3. put your war file in ${catalina.home}/www/deploy
//        When tomcat starts, it finds the host entry, then looks for any context files and will start any apps with a context
//        To add more sites just repeat and rinse, all webapps can share the same war file location and appbase
                "How will you load properties file?",
//                Use a ResourceBundle. See the Java docs for the specifics of how the ResourceBundle class works. Using this method, the properties file must go into the WEB-INF/classes directory or in a jar file contained in the WEB-INF/lib directory.
//        Another way is to use the method getResourceAsStream() from the ServletContext class. This allows you update the file without having to reload the webapp as required by the first method. Here is an example code snippet, without any error trapping:
//        // Assuming you are in a Servlet extending HttpServlet
//// This will look for a file called "/more/cowbell.properties" relative
//// to your servlet Root Context
//        InputStream is = getServletContext().getResourceAsStream("/more/cowbell.properties");
//        Properties p = new Properties();
//        p.load(is);
//        is.close();
                "Can I set Java system properties differently for each webapp?",
//                No. If you can edit Tomcat's startup scripts, you can add "-D" options to Java. But there is no way to add such properties in web.xml or the webapp's context.
                "How do I configure Tomcat to work with IIS and NTLM?",
//                Follow the standard instructions for when the isapi_redirector.dll
//                Configure IIS to use "integrated windows security"
//                In server.xml, make sure you disable tomcat authentication:
//        <Connector port="8009" enableLookups="false" redirectPort="8443" protocol="AJP/1.3" tomcatAuthentication="false" />
                "How can I access members of a custom Realm or Principal?",
//                When you create a custom subclass of RealmBase or GenericPrincipal and attempt to use those classes in your webapp code, you'll probably have problems with ClassCastException. This is because the instance returned by request.getUserPrincipal() is of a class loaded by the server's classloader, and you are trying to access it through you webapp's classloader. While the classes maybe otherwise exactly the same, different (sibling) classloaders makes them different classes.
//                This assumes you created a My Principal class, and put in Tomcat's server/classes (or lib) directory, as well as in your webapp's WEB-INF/classes (or lib) directory. Normally, you would put custom realm and principal classes in the server directory because they depend on other classes there.
//                Here's what you would like to do, but it throws ClassCastException:
//        MyPrincipal p = request.getUserPrincipal();
//        String emailAddress = p.getEmailAddress();
//        Here are 4 ways you might get around the classloader boundary:
//        Reflection
//        Principal p = request.getUserPrincipal();
//        String emailAddress = p.getClass().getMethod("getEmailAddress", null).invoke(p, null);
//        Move classes to a common classloader
//        You could put your custom classes in a classloader that is common to both the server and your webapp - e.g., either the "common" or bootstrap classloaders. To do this, however, you would also need to move the classes that your custom classes depend on up to the common classloader, and that seems like a bad idea, because there a many of them and they a core server classes.
//        Common Interfaces
//        Rather than move the implementing custom classes up, you could define interfaces for your customs classes, and put the interfaces in the common directory. You\'re code would look like this:
//        public interface MyPrincipalInterface extends java.security.Principal {
//            public String getEmailAddress();
//        }
//        public class MyPrincipal implements MyPrincipalInterface {
//            ...
//            public String getEmailAddress() {
//                return emailAddress;
//            }
//        }
//        public class MyServlet implements Servlet {
//            protected void doGet(HttpServletRequest request, HttpServletResponse response) throws
//                    ServletException, IOException {
//                MyPrincipalInterface p = (MyPrincipalInterface)request.getUserPrincipal();
//                String emailAddress = p.getEmailAddress();
//                ...
//            }
//            Notice that this method gives you pretty much the webapp code you wanted in the first place
//            Serializing / Deserializing
//            You might want to try serializing the response of 'request.getUserPrincipal()' and deserialize it to an instance of [webapp]MyPrincipal.
                "How do I override the default home page loaded by Tomcat?",
//                After successfully installing Tomcat, you usually test it by loading http://localhost:8080 . The contents of that page are compiled into the index_jsp servlet. The page even warns against modifying the index.jsp files for this reason. Luckily, it is quite easy to override that page. Inside $TOMCAT_HOME/conf/web.xml there is a section called <welcome-file-list> and it looks like this:
//
//        <welcome-file-list>
//        <welcome-file>index.html</welcome-file>
//        <welcome-file>index.htm</welcome-file>
//        <welcome-file>index.jsp</welcome-file>
//        </welcome-file-list>
//        The default servlet attempts to load the index.* files in the order listed. You may easily override the index.jsp file by creating an index.html file at $TOMCAT_HOME/webapps/ROOT. It's somewhat common for that file to contain a new static home page or a redirect to a servlet's main page. A redirect would look like:
//
//        <html>
//
//        <head>
//        <meta http-equiv="refresh" content="0;URL=http://mydomain.com/some/path/to/servlet/homepage/">
//        </head>
//
//        <body>
//        </body>
//
//        </html>
//        This change takes effect immediately and does not require a restart of Tomcat.
                "How do I enable Server Side Includes (SSI)?",
//                Two things have to be done for tomcat to aknowledge SSI scripts:
//                Rename $CATALINA_BASE/server/lib/servlets-ssi.renametojar to $CATALINA_BASE/server/lib/servlets-ssi.jar.
//                Uncomment the section of web.xml found in $CATALINA_BASE/conf/web.xml that deals with SSI. it looks like this when it is uncommented:
//        <servlet>
//        <servlet-name>ssi</servlet-name>
//        <servlet-class>org.apache.catalina.ssi.SSIServlet</servlet-class>
//        <init-param>
//        <param-name>buffered</param-name>
//        <param-value>1</param-value>
//        </init-param>
//        <init-param>
//        <param-name>debug</param-name>
//        <param-value>0</param-value>
//        </init-param>
//        <init-param>
//        <param-name>expires</param-name>
//        <param-value>666</param-value>
//        </init-param>
//        <init-param>
//        <param-name>isVirtualWebappRelative</param-name>
//        <param-value>0</param-value>
//        </init-param>
//        <load-on-startup>4</load-on-startup>
//        </servlet>
        };

        public static String[] uml = {
                "Define UML?",
//                Unified Modeling Language, a standard language for designing and documenting a system in an object-oriented manner. It has nine diagrams which can be used in design document to express design of software architecture.
        };

        public static String[] unixShellScripting = {
                "What is shell scripting?/Що таке shell scripting?"
//                Shell scripting is used to program command line of an operating system. Shell Scripting is also used to program the shell which is the base for any operating system. Shell scripts often refer to programming UNIX. Shell scripting is mostly used to program operating systems of windows, UNIX, Apple, etc. Also this script is used by companies to develop their own operating system with their own features.
        };

        public static String[] webDevelopment = {
                "What’s the difference between primary key and unique key?"
//                Shell scripting is used to program command line of an operating system. Shell Scripting is also used to program the shell which is the base for any operating system. Shell scripts often refer to programming UNIX. Shell scripting is mostly used to program operating systems of windows, UNIX, Apple, etc. Also this script is used by companies to develop their own operating system with their own features.
        };

        public static String[] weblogic = {
                "How do I provide user credentials for starting a server?",
//                When you create a domain, the Configuration Wizard prompts you to provide the
//                username and password for an initial administrative user. If you create the
//        domain in development mode, the wizard saves the username and encrypted password
//        in a boot identity file. A WebLogic Server instance can refer to a boot identity
//        file during its startup process. If a server instance does not find such a file,
//        it prompts you to enter credentials.
//        If you create a domain in production mode, or if you want to change user
//        credentials in an existing boot identity file, you can create a new boot
//        identity file.
        };

        public static String[] webServices = {
                "Define Web Service?",
//                A web service is a kind of software that is accessible on the Internet. It makes use of the XML messaging system and offers an easy to understand, interface for the end users.
        };

        public static String[] winApi = {
                "How windows differs from DOS and what is the advantage of GUI based program?",
//                Yes, you can, then the class belongs to global namespace which has no name. For commercial products, naturally, you wouldn’t want global namespace.
        };

        public static String[] windows = {
                "What is Active Directory?",
// Active Directory is a Meta Data. Active Directory is a data base which store a data base like your user information, computer information and also other network object info. It has capabilities to manage and administor the complite Network which connect with AD. - See more at: http://www.01world.in/p/windows.html#sthash.umBpgGRM.dpuf
        };

        public static String[] winForms = {
                "Can you write a class without specifying namespace? Which namespace does it belong to by default?? ",
//                Yes, you can, then the class belongs to global namespace which has no name. For commercial products, naturally, you wouldn’t want global namespace.
        };

        public static String[] wsdl = {
                "What is the Simple Structure Of WSDL Program?",
//                <definitions>
//
//        <types>
//
//        definition of types........
//
//        </types>
//
//        <message>
//
//        definition of a message....
//
//        </message>
//
//        <portType>
//
//        definition of a port.......
//
//        </portType>
//
//        <binding>
//
//        definition of a binding....
//
//        </binding>
//
//        </definitions>
        };

        public static String[] xhtml = {
                "What is XHTML?",
//                XHTML is a more formal, stricter version of HTML. XHTML is defined by an XML dtd which makes it much easier to handle.
        };

        public static String[] xml = {
                "Describe the differences between XML and HTML.",
                "Describe the role that XSL can play when dynamically generating HTML pages from a relational database./Опиши роль, що XSL може грати під час динамічної генерації HTML сторінок з бази даних.",
//                Even if candidates have never participated in a project involving this type of architecture, they should recognize it as one of the common uses of XML. Querying a database and then formatting the result set so that it can be validated as an XML document allows developers to translate the data into an HTML table using XSLT rules. Consequently, the format of the resulting HTML table can be modified without changing the database query or application code since the document rendering logic is isolated to the XSLT rules.
                "Give a few examples of types of applications that can benefit from using XML.",
//                There are literally thousands of applications that can benefit from XML technologies. The point of this question is not to have the candidate rattle off a laundry list of projects that they have worked on, but, rather, to allow the candidate to explain the rationale for choosing XML by citing a few real world examples. For instance, one appropriate answer is that XML allows content management systems to store documents independently of their format, which thereby reduces data redundancy. Another answer relates to B2B exchanges or supply chain management systems. In these instances, XML provides a mechanism for multiple companies to exchange data according to an agreed upon set of rules. A third common response involves wireless applications that require WML to render data on hand held devices.
                "What is DOM and how does it relate to XML?",
//                The Document Object Model (DOM) is an interface specification maintained by the W3C DOM Workgroup that defines an application independent mechanism to access, parse, or update XML data. In simple terms it is a hierarchical model that allows developers to manipulate XML documents easily Any developer that has worked extensively with XML should be able to discuss the concept and use of DOM objects freely. Additionally, it is not unreasonable to expect advanced candidates to thoroughly understand its internal workings and be able to explain how DOM differs from an event-based interface like SAX.
                "What is XML?",
//                Extensible Markup Language (XML) is the universal language for data on the Web
//                XML is a technology which allows us to create our own markup language.
//                XML documents are universally accepted as a standard way of representing information in platform and language independent manner.
//                XML is universal standard for information interchange.
//        XML documents can be created in any language and can be used in any language.
                "What is the difference between XML and HTML?",
//                XML is no way clashes with HTML, since they are for two different purposes.
//                HTML	XML
//        HTML is for displaying purpose.	whereas  XML is for data representation.
//        HTML is used to mark up text so it can be displayed to users.	XML is used to mark up data so it can be processed by computers.
//        HTML describes both structure (e.g. <p>, <h2>, <em>) and appearance (e.g. <br>, <font>, <i>)	XML describes only content, or “meaning”
//        HTML uses a fixed, unchangeable set of tags	In XML, you make up your own tags
        };

    }

}
