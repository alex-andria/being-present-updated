class JournalSerializer < ActiveModel::Serializer
  attributes :id, :mind, :body, :journal_image, :journal_entry, :journal_date
  
  # automatically generated. comment to see if journals still populate automatically
   has_one :user
end
