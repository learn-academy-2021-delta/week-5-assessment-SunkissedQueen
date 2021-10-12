# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: Everything comes to an end; however, confusion will never cease if you forget that keyword on your Ruby methods. Easily found with its beginning `def`, methods within Ruby are accessors. These methods allow you to view the data in whatever arrangement you properly requested. Everything is pretty much object-oriented; therefore knowing the scope of the key or value you need is also important. Ruby method has helpful traits that give implicit returns and are flexible with or without the parenthesis syntax. If you do use a parenthesis, no space between the parenthesis and the method name. Snake case applies with the method name also.

  Researched answer:
  Some more interesting traits of Ruby methods are:
  a) Overriding. If there are multiple methods name the same thing, Ruby will reassign any existing methods and use the last code rendered.
  b) Passing parameters. When writing a method with parameters, remember to pass them on the line with the method name. Please remember how many were passed so you don't get errors when calling the method.
  c)Class methods. After creating a class, you can make its method without creating another of the class. The syntax is `ClassName.method_name`
  class WeekEnd
    def assessment
    end
    def WeekEnd.work_all_day
    end                           
  end
  The method that can be invoked without instantiating an additional object is WeekEnd.work_all_day. This seems to be a helpful tool with passing data between other classes.  

2. What is a block in Ruby?

  Your answer: Blocks in Ruby are a function that runs with a method. It is the section of executable code that tells the code how to behave. The real estate between `def` and `end`.

  Researched answer: Blocks are normally encapsulated by curly braces for one line code or `do..end` for multi-lines of code. Some rule of thumbs with blocks are to invoke them by using functions of the same name and don't forget the curly braces. So much can be done using some keywords. Checkout BEGIN blocks and END blocks. When using these key words, you telling the data where to print out in the sequence. If there are multiple BEGINS, then they will populate in the order rendered in the code.



3. What is a gem?

  Your answer: A valuable resource `gem` gives Rspec and other Ruby software all the other application and software that is needed to run the code on the domain. It is open source. Yes, a small word, but it is a huge package of everything that makes coding and sharing useful information to the end user possible.

  Researched answer: Used for many purposes on the Ruby format, gems are open-source libraries of software and code using Ruby language. You use each gem by preceding the file name with the name of the gem. Besides Rspec, other gems and not all inclusive are JSON, Bundler, Rails, and Devise. These gems deal with installing, removing, and updating the RubyGems libraries. By the way, gems is the nickname for RubyGems libraries.



4. What is a relational database? Are there other kinds of databases?

  Your answer: Database--containers of useful information? Containers of useless information? It all depends on how you extract the information. Relational databases can definitely organized objects in such a way that the information can become very beneficial.

  Researched answer: SQL databases or RDBMS--The structure of relational databases make it easier to establish the relationships various objects. The attributes are assigned in a straightforward pattern. The keys are located in the rows on the table, while the columns the corresponding attributes for each object. It also sets a standard way of querying parameters about the stored data. The most popular types of relational databases are Microsoft SQL Server, Oracle Database, MySQL, and IBM DB2. If it is not relational, then nonrelational databases or non SQL databases can compile data. The structure is non-tabula, like graphs. They are more flexible and easily withstand large amounts of data.



5. What are primary keys? Why are they important?

  Your answer: The primary key showcases the unique identifier for each column in the table on a database.  In other words, it is giving a snap shot of the parent object. Each instance is held on a row.

  Researched answer: Primary keys serve a special purpose. It is recommended to be concise and never change them to maintain the accessibility of the database. Keys help databases with how its records get stored. These unique identifiers are used in comparing, sorting, and creating relationships amongst the attributes of different data. Keys can also be helpful with looking at related data between different databases.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: routes that provide mapping from HTTP verbs to controller CRUD actions...instead of depending on URL

2. JSON: JavaScript Object Notation---collection of name/value pairs and ordered list of values

3. ERB: a combination of plain text with Ruby code for variable substitution and flow control

4. Params: a hash for Ruby on Rails...collection of data received by the application during a particular HTTP request

5. API: Application Programming Interface...software that allows two applications to talk to each other
