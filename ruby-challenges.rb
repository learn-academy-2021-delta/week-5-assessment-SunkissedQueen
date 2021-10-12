# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.
# #method takes in an array and a letter
# def got_it(array, string)
#   #need to iterate across array and look at the values
#   array.select do |value|
#   #returns words that contain a particular letter
#     p value.include? string
#   end
# end
# output----> true, false, false, false, true on separate lines of boolean values ...used the same code but request the print out on the method and received the array after running the function

def got_it(array, string)
  #need to iterate across array and look at the values
  array.select do |value|
  #returns words that contain a particular letter
    value.include? string
  end
end
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

p got_it(beverages_array, letter_o)
p got_it(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

#method takes array
# def come_together array
#   #look at the values
#   array.each do |value|
#     #tell it to add each value, declare sum as 0
#     sum = 0
#     sum += value
#     #returns sum of numbers as an integer
#     p sum.to_i
#   end
# end
# Output--->got integers!!! However it was everything just added to zero...used map, each, select :( I know the reduce method in js adds the values in an array and give the output...researching the equivalent in Ruby and my structure...was definitely my structure. Rearranged and got expected output. Saw the reduce method..going to place here for a reference to practice later. I am not understanding it right now. It certainly works.
# def come_together array
#   p array.reduce(0) { |sum, value| sum + value }
# end

def come_together array
  #had to declare sum variable before iteration
  sum = 0
  #using each to perform action
  array.each do |value|
    #tell it to add each value
    sum += value
    #conclusion to the action
    end
  #returns sum of numbers as an integer, placed outside of the request for the sum so it only prints the last result..didn't need to convert to integer since it is printing the sum which is an integer
  # p sum.to_i
  p sum
end

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

come_together nums_array1
come_together nums_array2


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
class Bike #make class
  attr_accessor(:model, :wheels, :current_speed) #setter and getter for variables as symbols
  def initialize(model) #initialize each parameter that doesn't have a default value
    @model = model
    @wheels = 2 #default value
    @current_speed = 0 #default value
  end
  def bike_info #name a method that outputs values in sentence
    #string interpolation output
    p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
end

my_bike = Bike.new 'Trek' #make a new instance with the expected arguments
my_bike.bike_info #call the method on the object

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

class Bike #make class
  attr_accessor(:model, :wheels, :current_speed) #setter and getter for variables as symbols
  def initialize(model) #initialize each parameter that doesn't have a default value
    @model = model
    @wheels = 2 #default value
    @current_speed = 0 #default value
  end
  def bike_info #name a method that outputs values in sentence
    #string interpolation
    p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
  def pedal_faster value #argument will be the value given
    p @current_speed += value #current speed will become the addition of the value
  end
  def brake value
    if(@current_speed - value < 0)# conditional to state any negatives will equal 0
      p @current_speed = 0
    else
      p @current_speed -= value #otherwise current speed will be the difference of the value
    end
  end
end
my_bike = Bike.new 'Trek' #make a new instance with the expected arguments
my_bike.pedal_faster(10) #call the method on the object
my_bike.pedal_faster(10)  #each call should update the new object
my_bike.brake(25)
