# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Resetting seed file..."

puts "Seeding users..."
alex = User.create(first_name: "Alex", last_name: "D'Antonio", profile_image: "", email: "alex@mail.com", bio: "This is Alex's bio!", password_digest: "123")
annemarie = User.create(first_name: "Annemarie", last_name: "Lucernoni", profile_image: "", email: "annie@mail.com", bio: "This is Annemarie's bio!", password_digest: "123" )

puts "Seeding journals..."
alex_journal1 = Journal.create(journal_image: "", journal_entry: "Today I was present with my self by meditating...", mind: "", body: "", journal_date: "11/18/2022", user_id: alex.id)

puts "Seeding complete!"