class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :profile_image, :bio, :password_digest, :username
  has_many :journals
end
