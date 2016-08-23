# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


u1 = User.create(email: "foo@bar.com", password: "abcd1234")
u2 = User.create(email: "john@example.com", password: "abcd1234")

10.times do |i|
  Post.create!(user: u1)
end
