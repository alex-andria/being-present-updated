class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.boolean :mind
      t.boolean :body
      t.string :journal_image
      t.string :journal_entry
      t.string :journal_date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
