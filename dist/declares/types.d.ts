export type ServicePermissions = Record<string, string[]>

export type BasicUserInfo = {
  id: string
  name: string
  email: string
}

export type User = BasicUserInfo & {
  locations: string[]
  permissions: ServicePermissions
}

type PrimitiveFilterValue = string | number | boolean
type ListFilterValue = PrimitiveFilterValue[]
type FilterValue = PrimitiveFilterValue | ListFilterValue

type Filter = {field: string, value: FilterValue, op?: string} | undefined | null
type Ordering = {field: string, direction?: 'asc' | 'desc'} | string

export type QueryParams = {
  filters?: Filter[] | null
  ordering?: Ordering[] | null
  limit?: number | null
}

export type ListParams = QueryParams & {
  views?: QueryParams[] | null
  parallel?: Filter[] | null
}

export type FirstParams = Omit<QueryParams, 'limit'> & {
  views?: QueryParams[] | null
  parallel?: Filter[] | null
}

export type PaginatedListParams = QueryParams & {
  cursor?: string | null
}

export type Stored<Entity> = Entity & {
  id: string
  createdAt: string
  modifiedAt?: string
}

export type Eternal<Entity> = Entity & {
  isDeleted: boolean
}

export type EntityItemResponse<Entity> = Stored<Entity>

export type EntityListResponse<Entity> = Stored<Entity>[]

export type EntityPaginatedListResponse<Entity> = {
  list: Stored<Entity>[]
  nextCursor?: string
}

export type EntityUpdateParams<Entity> = Partial<Entity> & {
  id: string
}
