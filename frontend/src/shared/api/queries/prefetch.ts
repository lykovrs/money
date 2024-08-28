// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { type QueryClient } from "@tanstack/react-query";
import { AchievementService, OffersService, UsersService, WishesService, WishlistlistsService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseUsersServiceUsersControllerMe = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceUsersControllerMeKeyFn(), queryFn: () => UsersService.usersControllerMe() });
export const prefetchUseUsersServiceUsersControllerGetMyWishes = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceUsersControllerGetMyWishesKeyFn(), queryFn: () => UsersService.usersControllerGetMyWishes() });
export const prefetchUseUsersServiceUsersControllerFindOneByName = (queryClient: QueryClient, { name }: {
  name: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceUsersControllerFindOneByNameKeyFn({ name }), queryFn: () => UsersService.usersControllerFindOneByName({ name }) });
export const prefetchUseUsersServiceUsersControllerFindWishesByName = (queryClient: QueryClient, { name }: {
  name: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceUsersControllerFindWishesByNameKeyFn({ name }), queryFn: () => UsersService.usersControllerFindWishesByName({ name }) });
export const prefetchUseWishesServiceWishesControllerFindLast = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseWishesServiceWishesControllerFindLastKeyFn(), queryFn: () => WishesService.wishesControllerFindLast() });
export const prefetchUseWishesServiceWishesControllerFindTop = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseWishesServiceWishesControllerFindTopKeyFn(), queryFn: () => WishesService.wishesControllerFindTop() });
export const prefetchUseWishesServiceWishesControllerFindOne = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWishesServiceWishesControllerFindOneKeyFn({ id }), queryFn: () => WishesService.wishesControllerFindOne({ id }) });
export const prefetchUseWishlistlistsServiceWishlistsControllerFindAll = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseWishlistlistsServiceWishlistsControllerFindAllKeyFn(), queryFn: () => WishlistlistsService.wishlistsControllerFindAll() });
export const prefetchUseWishlistlistsServiceWishlistsControllerFindOne = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWishlistlistsServiceWishlistsControllerFindOneKeyFn({ id }), queryFn: () => WishlistlistsService.wishlistsControllerFindOne({ id }) });
export const prefetchUseOffersServiceOffersControllerFindAll = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseOffersServiceOffersControllerFindAllKeyFn(), queryFn: () => OffersService.offersControllerFindAll() });
export const prefetchUseOffersServiceOffersControllerFindOne = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOffersServiceOffersControllerFindOneKeyFn({ id }), queryFn: () => OffersService.offersControllerFindOne({ id }) });
export const prefetchUseAchievementServiceAchievementsControllerFindLast = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAchievementServiceAchievementsControllerFindLastKeyFn(), queryFn: () => AchievementService.achievementsControllerFindLast() });
export const prefetchUseAchievementServiceAchievementsControllerFindOne = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAchievementServiceAchievementsControllerFindOneKeyFn({ id }), queryFn: () => AchievementService.achievementsControllerFindOne({ id }) });
