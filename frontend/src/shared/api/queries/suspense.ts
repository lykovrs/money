// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AchievementService, OffersService, UsersService, WishesService, WishlistlistsService } from "../requests/services.gen";
import * as Common from "./common";
export const useUsersServiceUsersControllerMeSuspense = <TData = Common.UsersServiceUsersControllerMeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUsersServiceUsersControllerMeKeyFn(queryKey), queryFn: () => UsersService.usersControllerMe() as TData, ...options });
export const useUsersServiceUsersControllerGetMyWishesSuspense = <TData = Common.UsersServiceUsersControllerGetMyWishesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUsersServiceUsersControllerGetMyWishesKeyFn(queryKey), queryFn: () => UsersService.usersControllerGetMyWishes() as TData, ...options });
export const useUsersServiceUsersControllerFindOneByNameSuspense = <TData = Common.UsersServiceUsersControllerFindOneByNameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUsersServiceUsersControllerFindOneByNameKeyFn({ name }, queryKey), queryFn: () => UsersService.usersControllerFindOneByName({ name }) as TData, ...options });
export const useUsersServiceUsersControllerFindWishesByNameSuspense = <TData = Common.UsersServiceUsersControllerFindWishesByNameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUsersServiceUsersControllerFindWishesByNameKeyFn({ name }, queryKey), queryFn: () => UsersService.usersControllerFindWishesByName({ name }) as TData, ...options });
export const useWishesServiceWishesControllerFindLastSuspense = <TData = Common.WishesServiceWishesControllerFindLastDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWishesServiceWishesControllerFindLastKeyFn(queryKey), queryFn: () => WishesService.wishesControllerFindLast() as TData, ...options });
export const useWishesServiceWishesControllerFindTopSuspense = <TData = Common.WishesServiceWishesControllerFindTopDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWishesServiceWishesControllerFindTopKeyFn(queryKey), queryFn: () => WishesService.wishesControllerFindTop() as TData, ...options });
export const useWishesServiceWishesControllerFindOneSuspense = <TData = Common.WishesServiceWishesControllerFindOneDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWishesServiceWishesControllerFindOneKeyFn({ id }, queryKey), queryFn: () => WishesService.wishesControllerFindOne({ id }) as TData, ...options });
export const useWishlistlistsServiceWishlistsControllerFindAllSuspense = <TData = Common.WishlistlistsServiceWishlistsControllerFindAllDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWishlistlistsServiceWishlistsControllerFindAllKeyFn(queryKey), queryFn: () => WishlistlistsService.wishlistsControllerFindAll() as TData, ...options });
export const useWishlistlistsServiceWishlistsControllerFindOneSuspense = <TData = Common.WishlistlistsServiceWishlistsControllerFindOneDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWishlistlistsServiceWishlistsControllerFindOneKeyFn({ id }, queryKey), queryFn: () => WishlistlistsService.wishlistsControllerFindOne({ id }) as TData, ...options });
export const useOffersServiceOffersControllerFindAllSuspense = <TData = Common.OffersServiceOffersControllerFindAllDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOffersServiceOffersControllerFindAllKeyFn(queryKey), queryFn: () => OffersService.offersControllerFindAll() as TData, ...options });
export const useOffersServiceOffersControllerFindOneSuspense = <TData = Common.OffersServiceOffersControllerFindOneDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOffersServiceOffersControllerFindOneKeyFn({ id }, queryKey), queryFn: () => OffersService.offersControllerFindOne({ id }) as TData, ...options });
export const useAchievementServiceAchievementsControllerFindLastSuspense = <TData = Common.AchievementServiceAchievementsControllerFindLastDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAchievementServiceAchievementsControllerFindLastKeyFn(queryKey), queryFn: () => AchievementService.achievementsControllerFindLast() as TData, ...options });
export const useAchievementServiceAchievementsControllerFindOneSuspense = <TData = Common.AchievementServiceAchievementsControllerFindOneDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAchievementServiceAchievementsControllerFindOneKeyFn({ id }, queryKey), queryFn: () => AchievementService.achievementsControllerFindOne({ id }) as TData, ...options });
