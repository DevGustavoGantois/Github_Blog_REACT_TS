import { useForm } from "react-hook-form";
import { SearchInputContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const SearchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof SearchFormSchema>;

interface SearchInputProps {
    postsLength: number;
    getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({postsLength ,getPosts}: SearchInputProps) {
    const { register, handleSubmit } = useForm<SearchFormInput>( {
        resolver: zodResolver(SearchFormSchema)
    });

    async function handleSearchPosts(data: SearchFormInput) {
        await getPosts(data.query)
    }
    return (
        <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <header>
                <h3>Publicações</h3>
                <span>{postsLength} publicações</span>
            </header>

            <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
        </SearchInputContainer>
    )
}