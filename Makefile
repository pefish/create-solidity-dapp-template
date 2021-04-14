.PHONY: build

.DEFAULT_GOAL := build

sol-files := $(shell find ./contracts -name "*.sol")
builded-sol := $(shell find ./build/contracts -name "*.json" | head -1)

ifeq ($(builded-sol),)  # If no file be found in `./build/contracts`, set a value at will cause `$(builded-sol)` target can be executed
  builded-sol = "builded-sol"
endif

builded-ts-migration += $(shell find ./migrations -name "*.js" | head -1)

ifeq ($(builded-ts-migration),)
  builded-ts-migration = "builded-ts-migration"
endif

build: $(builded-sol) $(builded-ts-migration)
	@echo "\ndone!!!"

$(builded-sol): $(sol-files)
	@yarn build-sol
	@yarn build-ts-type

$(builded-ts-migration): migrations/*.ts
	@yarn build-ts-migration
