FROM microsoft/dotnet

COPY . /dotnetapp

WORKDIR /dotnetapp/NetExpress
RUN dotnet restore

ENTRYPOINT ["dotnet", "run"]
