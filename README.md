## 1、安装

### 安装最新版本：composer create-project laravel/laravel --prefer-dist

### 安装指定版本 命令： composer create-project laravel/laravel=5.3.\* demo --prefer-dist

## 2、配置可跨域

<a href="http://www.ptbird.cn/laravel-cors-to-cors-laravel-app.html">
  文档地址http://www.ptbird.cn/laravel-cors-to-cors-laravel-app.html
</a>

### 安装 laravel-cors

composer require barryvdh/laravel-cors

### 位于：config/app.php,添加下面代码

Barryvdh\Cors\ServiceProvider::class,

###全局使用：
如果作为全局使用的中间件，则直接加入到 middleware 中即可

修改 app/Http/kernel.php 文件

protected \$middleware = [ // ... \Barryvdh\Cors\HandleCors::class, ];

## 3、post 请求需要 csrf 令牌

### 在 app/http/VerifyCsrfToken.php 中添加阻止令牌的方法

```js
public function handle($request, \Closure $next)
{
// 使用 CSRF
//return parent::handle($request, $next);
// 禁用 CSRF
return $next($request);
}
```

## 4.生成控制器

php artisan make:controller Home/HomeController

## 数据库迁移

### 迁移示例

###

```bash
  # create 表
  php artisan make:migration create_users_table

  # $table->char('real_name', 20)->default('$value'); //相当于带有长度的 CHAR
  # $table->string('user_name', 20); //相当于带长度的 VARCHAR
  # $table->text('email');  // 相当于 TEXT
  # $table->longText('description');    //相当于 LONGTEXT
  # $table->integer(123);    //相当于 INTEGER
  # $table->tinyInteger('votes');    //相当于 TINYINT
  # $table->enum('sex', ['X', 'Y']); // 相当于 ENUM
  # $table->binary('data'); //相当于 BLOB
  # $table->boolean('status'); //相当于 BOOLEAN

  php artisan migrate

  # Migration table created successfully.
  # Migrating: 2014_10_12_000000_create_users_table

```

###

```bash
  php artisan make:seeder UsersTableSeeder

  # Seeder created successfully.


  composer dump-autoload
  # Generating optimized autoload filesCarbon 1 is deprecated, see how to migrate to Carbon 2.
  # https://carbon.nesbot.com/docs/#api-carbon-2
  # You can run ".\vendor\bin\upgrade-carbon" to get help in updating carbon and other frameworks and libraries that

  # depend on it.

  # > Illuminate\Foundation\ComposerScripts::postAutoloadDump
  # > @php artisan package:discover
  # > Discovered Package: barryvdh/laravel-cors
  # > Discovered Package: fideloper/proxy
  # > Discovered Package: laravel/tinker
  # > Discovered Package: nesbot/carbon
  # > Package manifest generated successfully.
  # > Generated optimized autoload files containing 3402 classes


  # 在 /database/factories/userFactories.php
  #制造数据
  # $factory->define(App\User::class, function (Faker $faker) {
  #   return [
  #     'real_name' => str_random(10),
  #     'user_name' => str_random(10),
  #     'phone' => $faker->numberBetween($min = 18600000000, $max = 18699999999),
  #     'sex' => $faker->randomELement($array = array('X', 'Y')),
  #     'headicon' => 'default.jpg',
  #     'status' => $faker->randomELement($array = array('0', '1')),
  #     'email' => $faker->unique()->email,
  #     'password' => $faker->password,
  #     'token' => str_random(10),
  #     ];
  # });


  # 在 /database/seeds/usersTableSeeder.php
  # public function run()
  # {
  #     factory(\App\User::class,10)->create();
  # }

  # 调用制造数据方法
  # 在 /database/seeds/databaseSeeder.php
  # public function run()
  # {
  #     $this->call(UsersTableSeeder::class);
  # }

  #运行命令
  php artisan db:seed
  Seeding: UsersTableSeeder


```
