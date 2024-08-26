// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseQueryResult } from "@tanstack/react-query";
import { AuthService, OffersService, UsersService, WishesService, WishlistlistsService } from "../requests/services.gen";
export type UsersServiceUsersControllerMeDefaultResponse = Awaited<ReturnType<typeof UsersService.usersControllerMe>>;
export type UsersServiceUsersControllerMeQueryResult<TData = UsersServiceUsersControllerMeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceUsersControllerMeKey = "UsersServiceUsersControllerMe";
export const UseUsersServiceUsersControllerMeKeyFn = (queryKey?: Array<unknown>) => [useUsersServiceUsersControllerMeKey, ...(queryKey ?? [])];
export type UsersServiceUsersControllerGetMyWishesDefaultResponse = Awaited<ReturnType<typeof UsersService.usersControllerGetMyWishes>>;
export type UsersServiceUsersControllerGetMyWishesQueryResult<TData = UsersServiceUsersControllerGetMyWishesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceUsersControllerGetMyWishesKey = "UsersServiceUsersControllerGetMyWishes";
export const UseUsersServiceUsersControllerGetMyWishesKeyFn = (queryKey?: Array<unknown>) => [useUsersServiceUsersControllerGetMyWishesKey, ...(queryKey ?? [])];
export type UsersServiceUsersControllerFindOneByNameDefaultResponse = Awaited<ReturnType<typeof UsersService.usersControllerFindOneByName>>;
export type UsersServiceUsersControllerFindOneByNameQueryResult<TData = UsersServiceUsersControllerFindOneByNameDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceUsersControllerFindOneByNameKey = "UsersServiceUsersControllerFindOneByName";
export const UseUsersServiceUsersControllerFindOneByNameKeyFn = ({ name }: {
  name: string;
}, queryKey?: Array<unknown>) => [useUsersServiceUsersControllerFindOneByNameKey, ...(queryKey ?? [{ name }])];
export type UsersServiceUsersControllerFindWishesByNameDefaultResponse = Awaited<ReturnType<typeof UsersService.usersControllerFindWishesByName>>;
export type UsersServiceUsersControllerFindWishesByNameQueryResult<TData = UsersServiceUsersControllerFindWishesByNameDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceUsersControllerFindWishesByNameKey = "UsersServiceUsersControllerFindWishesByName";
export const UseUsersServiceUsersControllerFindWishesByNameKeyFn = ({ name }: {
  name: string;
}, queryKey?: Array<unknown>) => [useUsersServiceUsersControllerFindWishesByNameKey, ...(queryKey ?? [{ name }])];
export type WishesServiceWishesControllerFindLastDefaultResponse = Awaited<ReturnType<typeof WishesService.wishesControllerFindLast>>;
export type WishesServiceWishesControllerFindLastQueryResult<TData = WishesServiceWishesControllerFindLastDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useWishesServiceWishesControllerFindLastKey = "WishesServiceWishesControllerFindLast";
export const UseWishesServiceWishesControllerFindLastKeyFn = (queryKey?: Array<unknown>) => [useWishesServiceWishesControllerFindLastKey, ...(queryKey ?? [])];
export type WishesServiceWishesControllerFindTopDefaultResponse = Awaited<ReturnType<typeof WishesService.wishesControllerFindTop>>;
export type WishesServiceWishesControllerFindTopQueryResult<TData = WishesServiceWishesControllerFindTopDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useWishesServiceWishesControllerFindTopKey = "WishesServiceWishesControllerFindTop";
export const UseWishesServiceWishesControllerFindTopKeyFn = (queryKey?: Array<unknown>) => [useWishesServiceWishesControllerFindTopKey, ...(queryKey ?? [])];
export type WishesServiceWishesControllerFindOneDefaultResponse = Awaited<ReturnType<typeof WishesService.wishesControllerFindOne>>;
export type WishesServiceWishesControllerFindOneQueryResult<TData = WishesServiceWishesControllerFindOneDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useWishesServiceWishesControllerFindOneKey = "WishesServiceWishesControllerFindOne";
export const UseWishesServiceWishesControllerFindOneKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useWishesServiceWishesControllerFindOneKey, ...(queryKey ?? [{ id }])];
export type WishlistlistsServiceWishlistsControllerFindAllDefaultResponse = Awaited<ReturnType<typeof WishlistlistsService.wishlistsControllerFindAll>>;
export type WishlistlistsServiceWishlistsControllerFindAllQueryResult<TData = WishlistlistsServiceWishlistsControllerFindAllDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useWishlistlistsServiceWishlistsControllerFindAllKey = "WishlistlistsServiceWishlistsControllerFindAll";
export const UseWishlistlistsServiceWishlistsControllerFindAllKeyFn = (queryKey?: Array<unknown>) => [useWishlistlistsServiceWishlistsControllerFindAllKey, ...(queryKey ?? [])];
export type WishlistlistsServiceWishlistsControllerFindOneDefaultResponse = Awaited<ReturnType<typeof WishlistlistsService.wishlistsControllerFindOne>>;
export type WishlistlistsServiceWishlistsControllerFindOneQueryResult<TData = WishlistlistsServiceWishlistsControllerFindOneDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useWishlistlistsServiceWishlistsControllerFindOneKey = "WishlistlistsServiceWishlistsControllerFindOne";
export const UseWishlistlistsServiceWishlistsControllerFindOneKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useWishlistlistsServiceWishlistsControllerFindOneKey, ...(queryKey ?? [{ id }])];
export type OffersServiceOffersControllerFindAllDefaultResponse = Awaited<ReturnType<typeof OffersService.offersControllerFindAll>>;
export type OffersServiceOffersControllerFindAllQueryResult<TData = OffersServiceOffersControllerFindAllDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOffersServiceOffersControllerFindAllKey = "OffersServiceOffersControllerFindAll";
export const UseOffersServiceOffersControllerFindAllKeyFn = (queryKey?: Array<unknown>) => [useOffersServiceOffersControllerFindAllKey, ...(queryKey ?? [])];
export type OffersServiceOffersControllerFindOneDefaultResponse = Awaited<ReturnType<typeof OffersService.offersControllerFindOne>>;
export type OffersServiceOffersControllerFindOneQueryResult<TData = OffersServiceOffersControllerFindOneDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOffersServiceOffersControllerFindOneKey = "OffersServiceOffersControllerFindOne";
export const UseOffersServiceOffersControllerFindOneKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useOffersServiceOffersControllerFindOneKey, ...(queryKey ?? [{ id }])];
export type AuthServiceAuthControllerSignUpMutationResult = Awaited<ReturnType<typeof AuthService.authControllerSignUp>>;
export type AuthServiceAuthControllerSigninMutationResult = Awaited<ReturnType<typeof AuthService.authControllerSignin>>;
export type UsersServiceUsersControllerFindMutationResult = Awaited<ReturnType<typeof UsersService.usersControllerFind>>;
export type WishesServiceWishesControllerCreateMutationResult = Awaited<ReturnType<typeof WishesService.wishesControllerCreate>>;
export type WishesServiceWishesControllerCopyMutationResult = Awaited<ReturnType<typeof WishesService.wishesControllerCopy>>;
export type WishlistlistsServiceWishlistsControllerCreateMutationResult = Awaited<ReturnType<typeof WishlistlistsService.wishlistsControllerCreate>>;
export type OffersServiceOffersControllerCreateMutationResult = Awaited<ReturnType<typeof OffersService.offersControllerCreate>>;
export type UsersServiceUsersControllerUpdateMeMutationResult = Awaited<ReturnType<typeof UsersService.usersControllerUpdateMe>>;
export type WishesServiceWishesControllerUpdateMutationResult = Awaited<ReturnType<typeof WishesService.wishesControllerUpdate>>;
export type WishlistlistsServiceWishlistsControllerUpdateMutationResult = Awaited<ReturnType<typeof WishlistlistsService.wishlistsControllerUpdate>>;
export type WishesServiceWishesControllerRemoveMutationResult = Awaited<ReturnType<typeof WishesService.wishesControllerRemove>>;
export type WishlistlistsServiceWishlistsControllerRemoveMutationResult = Awaited<ReturnType<typeof WishlistlistsService.wishlistsControllerRemove>>;
