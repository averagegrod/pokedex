class PokedexController < ApplicationController

	def show
		@pokedex = JSON.parse Pokegem.get "pokedex", 1
		@pokedex["pokemon"][0..200].each do |pokemon|
			id = pokemon["resource_uri"]
			id.slice! "api/v1/pokemon/"
			id.slice! "/"
			pokemon["info"] = JSON.parse Pokegem.get "pokemon", id
			sprite = pokemon["info"]["sprites"][0]["resource_uri"]
			sprite.slice! "api/v1/sprite/"
			sprite.slice! "/"
			sprite.slice! "/"
			pokemon["sprite"] = JSON.parse Pokegem.get "sprite", sprite
		end 
	end

end
