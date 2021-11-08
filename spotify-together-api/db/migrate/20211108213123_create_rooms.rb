class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :room_key
      t.string :host_token

      t.timestamps
    end
  end
end
