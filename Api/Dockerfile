FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copia csproj e restaura dependências
COPY *.csproj ./
RUN dotnet restore

# Copia tudo e builda release
COPY . ./
RUN dotnet publish -c Release -o out

# Build do runtime menor
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out ./

# Define variável de ambiente para escutar na porta certa
ENV ASPNETCORE_URLS=http://+:${PORT}

EXPOSE ${PORT}

ENTRYPOINT ["dotnet", "Api.dll"]
