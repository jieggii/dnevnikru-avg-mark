clean:
	rm -r build

build:
	mkdir -p build
	zip -r build/dnevnikru-avg-mark.xpi icons app.js manifest.json LICENSE

rebuild: clean build
