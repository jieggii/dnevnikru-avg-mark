clean:
	rm -r build

build:
	mkdir -p build
	zip -r build/dnevnikru-avg-mark.xpi ./*

rebuild: clean build
