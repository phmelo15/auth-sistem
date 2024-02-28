import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { User } from './users/entities/User';
import { AuthService } from './auth/auth.service';
import { Profile } from './users/entities/Profile';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
// import { CoffeTypesModule } from './coffe-types/coffe-types.module';
import { CoffeModule } from './coffe/coffe.module';
import { coffeTypes } from './typeorm/entities/coffeTypes';
import { FavoritesModule } from './favorites/favorites.module';
import { favorites } from './typeorm/entities/favorites';
import { CartModule } from './cart/cart.module';
import { cart } from './typeorm/entities/cart';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile, coffeTypes, favorites, cart]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MyElterasu@3030',
      database: 'authSystemData',
      entities: [User, Profile, coffeTypes, favorites, cart],
      synchronize: false,
    }),
    UsersModule,
    AuthModule,
    CoffeModule,
    FavoritesModule,
    CartModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
