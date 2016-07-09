def non_duplicated_values(values)
  values.find_all { |value| values.count(value) == 1 }
end

puts non_duplicated_values([1,2,2,3,3,4,5])