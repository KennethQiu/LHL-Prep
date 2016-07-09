def length_finder(input_array)
  input_array.map {|x| x.length}
end

puts length_finder(["ABC","ab","a"])