
class Utils {

  public static uuid() : string {
    /*jshint bitwise:false */
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
        .toString(16);
    }

    return uuid;
  }

  public static pluralize(count: number, word: string) {
    return count === 1 ? word : word + 's';
  }

  public static store(namespace : string, data? : any) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    }

    var store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  }

  public static extend(...objs : any[]) : any {
    var newObj = {};
    for (var i = 0; i < objs.length; i++) {
      var obj = objs[i];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }

  public static beginsWithAt(text: string) {
    return text[0] === '@'
  }

  public static parseIntoToTokens(text: string): {
		todoText: string;
		tags: Array<string> | undefined;
	} {
		/**
		 // const [todoText, ...tags] = text.split("@");
		 *  the logic above wouldn't work for tags within the todo title
		 *  since it assumes tags would always be at the end.
		 */
		const todoText = text
			.split(" ")
			.filter((word) => !this.beginsWithAt(word))
			.join(" ");

		const tags = text
			.split(" ")
			.filter((word) => this.beginsWithAt(word))
			.map((tag) => tag.split("@")[1]); //removes @ from tags

		return { todoText, tags };
	}
}

export { Utils };
