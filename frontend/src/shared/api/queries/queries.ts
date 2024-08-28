// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AchievementService, AuthService, OffersService, UsersService, WishesService, WishlistlistsService } from "../requests/services.gen";
import { CreateAchievementDto, CreateOfferDto, CreateUserDto, CreateWishDto, CreateWishlistDto, FindUserDto, UpdateAchievementDto, UpdateUserDto, UpdateWishDto, UpdateWishlistDto } from "../requests/types.gen";
import * as Common from "./common";
export const useUsersServiceUsersControllerMe = <TData = Common.UsersServiceUsersControllerMeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceUsersControllerMeKeyFn(queryKey), queryFn: () => UsersService.usersControllerMe() as TData, ...options });
export const useUsersServiceUsersControllerGetMyWishes = <TData = Common.UsersServiceUsersControllerGetMyWishesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceUsersControllerGetMyWishesKeyFn(queryKey), queryFn: () => UsersService.usersControllerGetMyWishes() as TData, ...options });
export const useUsersServiceUsersControllerFindOneByName = <TData = Common.UsersServiceUsersControllerFindOneByNameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceUsersControllerFindOneByNameKeyFn({ name }, queryKey), queryFn: () => UsersService.usersControllerFindOneByName({ name }) as TData, ...options });
export const useUsersServiceUsersControllerFindWishesByName = <TData = Common.UsersServiceUsersControllerFindWishesByNameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceUsersControllerFindWishesByNameKeyFn({ name }, queryKey), queryFn: () => UsersService.usersControllerFindWishesByName({ name }) as TData, ...options });
export const useWishesServiceWishesControllerFindLast = <TData = Common.WishesServiceWishesControllerFindLastDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWishesServiceWishesControllerFindLastKeyFn(queryKey), queryFn: () => WishesService.wishesControllerFindLast() as TData, ...options });
export const useWishesServiceWishesControllerFindTop = <TData = Common.WishesServiceWishesControllerFindTopDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWishesServiceWishesControllerFindTopKeyFn(queryKey), queryFn: () => WishesService.wishesControllerFindTop() as TData, ...options });
export const useWishesServiceWishesControllerFindOne = <TData = Common.WishesServiceWishesControllerFindOneDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWishesServiceWishesControllerFindOneKeyFn({ id }, queryKey), queryFn: () => WishesService.wishesControllerFindOne({ id }) as TData, ...options });
export const useWishlistlistsServiceWishlistsControllerFindAll = <TData = Common.WishlistlistsServiceWishlistsControllerFindAllDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWishlistlistsServiceWishlistsControllerFindAllKeyFn(queryKey), queryFn: () => WishlistlistsService.wishlistsControllerFindAll() as TData, ...options });
export const useWishlistlistsServiceWishlistsControllerFindOne = <TData = Common.WishlistlistsServiceWishlistsControllerFindOneDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWishlistlistsServiceWishlistsControllerFindOneKeyFn({ id }, queryKey), queryFn: () => WishlistlistsService.wishlistsControllerFindOne({ id }) as TData, ...options });
export const useOffersServiceOffersControllerFindAll = <TData = Common.OffersServiceOffersControllerFindAllDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOffersServiceOffersControllerFindAllKeyFn(queryKey), queryFn: () => OffersService.offersControllerFindAll() as TData, ...options });
export const useOffersServiceOffersControllerFindOne = <TData = Common.OffersServiceOffersControllerFindOneDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOffersServiceOffersControllerFindOneKeyFn({ id }, queryKey), queryFn: () => OffersService.offersControllerFindOne({ id }) as TData, ...options });
export const useAchievementServiceAchievementsControllerFindLast = <TData = Common.AchievementServiceAchievementsControllerFindLastDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAchievementServiceAchievementsControllerFindLastKeyFn(queryKey), queryFn: () => AchievementService.achievementsControllerFindLast() as TData, ...options });
export const useAchievementServiceAchievementsControllerFindOne = <TData = Common.AchievementServiceAchievementsControllerFindOneDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAchievementServiceAchievementsControllerFindOneKeyFn({ id }, queryKey), queryFn: () => AchievementService.achievementsControllerFindOne({ id }) as TData, ...options });
export const useAuthServiceAuthControllerSignUp = <TData = Common.AuthServiceAuthControllerSignUpMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateUserDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateUserDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.authControllerSignUp({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceAuthControllerSignin = <TData = Common.AuthServiceAuthControllerSigninMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: unknown;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: unknown;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.authControllerSignin({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUsersServiceUsersControllerFind = <TData = Common.UsersServiceUsersControllerFindMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: FindUserDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: FindUserDto;
}, TContext>({ mutationFn: ({ requestBody }) => UsersService.usersControllerFind({ requestBody }) as unknown as Promise<TData>, ...options });
export const useWishesServiceWishesControllerCreate = <TData = Common.WishesServiceWishesControllerCreateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateWishDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateWishDto;
}, TContext>({ mutationFn: ({ requestBody }) => WishesService.wishesControllerCreate({ requestBody }) as unknown as Promise<TData>, ...options });
export const useWishesServiceWishesControllerCopy = <TData = Common.WishesServiceWishesControllerCopyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => WishesService.wishesControllerCopy({ id }) as unknown as Promise<TData>, ...options });
export const useWishlistlistsServiceWishlistsControllerCreate = <TData = Common.WishlistlistsServiceWishlistsControllerCreateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateWishlistDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateWishlistDto;
}, TContext>({ mutationFn: ({ requestBody }) => WishlistlistsService.wishlistsControllerCreate({ requestBody }) as unknown as Promise<TData>, ...options });
export const useOffersServiceOffersControllerCreate = <TData = Common.OffersServiceOffersControllerCreateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateOfferDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateOfferDto;
}, TContext>({ mutationFn: ({ requestBody }) => OffersService.offersControllerCreate({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAchievementServiceAchievementsControllerCreate = <TData = Common.AchievementServiceAchievementsControllerCreateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateAchievementDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateAchievementDto;
}, TContext>({ mutationFn: ({ requestBody }) => AchievementService.achievementsControllerCreate({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAchievementServiceAchievementsControllerCopy = <TData = Common.AchievementServiceAchievementsControllerCopyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => AchievementService.achievementsControllerCopy({ id }) as unknown as Promise<TData>, ...options });
export const useUsersServiceUsersControllerUpdateMe = <TData = Common.UsersServiceUsersControllerUpdateMeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UpdateUserDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UpdateUserDto;
}, TContext>({ mutationFn: ({ requestBody }) => UsersService.usersControllerUpdateMe({ requestBody }) as unknown as Promise<TData>, ...options });
export const useWishesServiceWishesControllerUpdate = <TData = Common.WishesServiceWishesControllerUpdateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: UpdateWishDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: UpdateWishDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => WishesService.wishesControllerUpdate({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useWishlistlistsServiceWishlistsControllerUpdate = <TData = Common.WishlistlistsServiceWishlistsControllerUpdateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: UpdateWishlistDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: UpdateWishlistDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => WishlistlistsService.wishlistsControllerUpdate({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useAchievementServiceAchievementsControllerUpdate = <TData = Common.AchievementServiceAchievementsControllerUpdateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: UpdateAchievementDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: UpdateAchievementDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => AchievementService.achievementsControllerUpdate({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useWishesServiceWishesControllerRemove = <TData = Common.WishesServiceWishesControllerRemoveMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => WishesService.wishesControllerRemove({ id }) as unknown as Promise<TData>, ...options });
export const useWishlistlistsServiceWishlistsControllerRemove = <TData = Common.WishlistlistsServiceWishlistsControllerRemoveMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => WishlistlistsService.wishlistsControllerRemove({ id }) as unknown as Promise<TData>, ...options });
export const useAchievementServiceAchievementsControllerRemove = <TData = Common.AchievementServiceAchievementsControllerRemoveMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => AchievementService.achievementsControllerRemove({ id }) as unknown as Promise<TData>, ...options });
