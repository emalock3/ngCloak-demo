ngCloak-demo
============

AngularJSのngCloakの動作確認用のコードです

### 確認方法 ###

- Mavenの場合
`mvn jetty:run` port指定する場合は `mvn -Djetty.port=NNNN jetty:run`
- それ以外
適当なWebサーバーにappディレクトリ配下をコピー

上記のいずれかを行い `http://localhost:8080` へアクセス
