class User < ApplicationRecord
has_secure_password

has_many :journals

validates :password_digest, presence: true
validates :email, presence: true, uniqueness: true
end
