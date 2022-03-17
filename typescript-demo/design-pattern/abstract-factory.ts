interface AbstractFactory {
    // 创建Html文档:
    createHtml(md: string): HtmlDocument;
    // 创建Word文档:
    createWord(md: string): WordDocument;
}



interface HtmlDocument {
    toHtml(): string;
    save(path: string): void;
}

interface WordDocument {
    save(path: string): void;
}

class FastHtmlDocument implements HtmlDocument {
    public toHtml(): string {
        return "null";
    }
    public save(path: string): void {

    }
}

class FastWordDocument implements WordDocument {
    public save(path: string): void {

    }
}


class FastFactory implements AbstractFactory {
    public createHtml(md: string): HtmlDocument {
        return new FastHtmlDocument();
    }
    public createWord(md: string): WordDocument {
        return new FastWordDocument();
    }
}

// 实际工厂:
class GoodFactory implements AbstractFactory {
    public createHtml(): HtmlDocument {
        return new GoodHtmlDocument();
    }
    public createWord(): WordDocument {
        return new GoodWordDocument();
    }
}

// 实际产品:
class GoodHtmlDocument implements HtmlDocument {
    toHtml(): string {
        throw new Error("Method not implemented.");
    }
    save(path: string): void {
        throw new Error("Method not implemented.");
    }

}

class GoodWordDocument implements HtmlDocument {
    toHtml(): string {
        throw new Error("Method not implemented.");
    }
    save(path: string): void {
        throw new Error("Method not implemented.");
    }
}