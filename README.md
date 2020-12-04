# RationalModConverter

## これはなに

AtCoderのModをとる問題の問題文の中で，だいたいsqrt(Mod)より大きい値があったら，分母も分子も絶対値がだいたいsqrt(Mod)以下になる有理数に変換し，横に表示してくれるChrom拡張です．

## 細かい仕様

問題分のinnerHTML内に99844353, 1000000007, 10^{9}+7などが現れたら「Modを取る問題」と判定します．
2x^2 ≦ Modの場合，https://en.wikipedia.org/wiki/Rational_reconstruction_(mathematics) のアルゴリズムに従って有理数に戻します．

## 使い方

このリポジトリをクローンして，Chromeに拡張機能として登録してください．
chrome://extensions/ の「パッケージ化されていない拡張機能を読み込む」を押して，クローンしてできたディレクトリを指定すればOKです．

## その他

PR大歓迎です．Issue建ててくれたら見ます．
何かあったらご連絡ください: @catupper