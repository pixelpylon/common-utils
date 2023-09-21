export type ServicePermissions = Record<string, string[]>

export type User = {
  id: string
  name: string
  email: string
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
  cursor?: string | null
  limit?: number | null
  filters?: Filters | null
  ordering?: Ordering | null
}

export type DbData<Entity> = Entity & {
  id: string
  createdAt: string
  modifiedAt?: string
}

export type EntityItemResponse<Entity> = DbData<Entity>

export type EntityListResponse<Entity> = {
  list: EntityItemResponse<Entity>[]
  nextCursor?: string
}

export type EntityUpdateParams<Entity> = Partial<Entity> & {
  id: string
}
