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

type FilterValue = string | number | boolean
type NumberFilter = {
  value: number
  op: '<' | '<=' | '>' | '>=' | '!='
}

type StringFilter = {
  value: string
  op: '!='
}

type BooleanFilter = {
  value: boolean
  op: '!='
}

type ListFilter = {
  value: FilterValue[]
  op: 'in'
}

type Filter = FilterValue | FilterValue[] | NumberFilter | StringFilter | BooleanFilter | ListFilter

type Filters = {field: string, value: Filter}[]

type Ordering = ({field: string, direction?: 'asc' | 'desc'} | string)[]

export type ListParams = {
  limit?: number | null
  filters?: Filters | null
  ordering?: Ordering | null
}

export type PaginatedListParams = ListParams & {
  cursor?: string | null
}

export type DbData<Entity> = Entity & {
  id: string
  createdAt: string
  modifiedAt?: string
}

export type EntityItemResponse<Entity> = DbData<Entity>

export type EntityListResponse<Entity> = EntityItemResponse<Entity>[]

export type EntityPaginatedListResponse<Entity> = {
  list: EntityItemResponse<Entity>[]
  nextCursor?: string
}

export type EntityUpdateParams<Entity> = Partial<Entity> & {
  id: string
}
