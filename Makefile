error:
	@echo "Please choose one of the following target: init"
	
deploy:
	@npm run build && npx gh-pages -d build -t true
