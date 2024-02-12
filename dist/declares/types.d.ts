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

type PrimitiveValueOperation = '<' | '<=' | '>' | '>=' | '!=' | '==' | 'array-contains'
type ListValueOperation = 'in' | 'not-in' | 'array-contains-any'

type FilterValue = string | number | boolean
type NumberFilter = {
  value: number
  op: PrimitiveValueOperation
}

type StringFilter = {
  value: string
  op: PrimitiveValueOperation
}

type BooleanFilter = {
  value: boolean
  op: PrimitiveValueOperation
}

type ListFilter = {
  value: FilterValue[]
  op: ListValueOperation
}

type Filter = FilterValue | FilterValue[] | NumberFilter | StringFilter | BooleanFilter | ListFilter

type Filters = ({field: string, value: Filter} | undefined | null)[]

type Ordering = ({field: string, direction?: 'asc' | 'desc'} | string)[]

export type ListParams = {
  limit?: number | null
  filters?: Filters | null
  ordering?: Ordering | null
}

export type PaginatedListParams = ListParams & {
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
