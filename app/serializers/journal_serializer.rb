class JournalSerializer < ActiveModel::Serializer
  attributes :id, :mind, :body, :journal_image, :journal_entry, :journal_date
  
  # automatically generated
  #  has_one :user
end
