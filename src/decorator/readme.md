# デコレータ

## Class Decorator

- デコレータ関数が受け取ることができるのはconstructorのみ。
- 1番目の「Logger running」と2番目の「Loggerの中で受けとったconstructorを表示:」の出力がPersonクラスのconstructorより前に表示されている。
- デコレータはJavaScriptがクラスの定義を見つけた時に実行される。
- インスタンス化のタイミングではないので、newの行を削除してもLoggerデコレータのconsole.logは出力される。

### Decorator Factory

- LoggerFactoryで任意の引数を受け取り、それを使って、その後の匿名関数で取得したclassのconstructorで色々できるのである。
